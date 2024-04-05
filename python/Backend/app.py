import asyncio
from flask import Flask, request, jsonify, make_response
from temporalio.client import Client
from flask_cors import CORS
from .application.temporal.workflow import SendOTPWorkflow
from .application.temporal.shared_objects import WorkflowOptions, task_queue_name
from .application.models.db import init_db
from dotenv import load_dotenv
load_dotenv()
import os

def create_app(*config):
    app = Flask(__name__)
    """ 
      cors({
    origin: [
      "localhost:5173",
      "http://localhost:5173",
      "https://buysomething.vercel.app",
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Origin"],
  })
     """
    CORS(app, supports_credentials=True, resources={r"/*": {"origins": ["http://localhost:5173", "https://buysomething.vercel.app"]}}, allow_headers=["Content-Type", "Authorization", "Origin"])

    with app.app_context():
        @app.route("/favicon.ico")
        def ret():
            return jsonify("success")
        from .application.controllers.user_bp import user_bp
        from .application.controllers.product_bp import product_bp
        from .application.controllers.transaction_bp import transaction_bp
        init_db()  
         
        app.config['MAIL_SERVER']='smtp.gmail.com'
        app.config['MAIL_PORT'] = 465
        app.config['MAIL_USERNAME'] = "oluwatobilobaadebisi6@gmail.com"
        app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
        app.config['MAIL_USE_TLS'] = False
        app.config['MAIL_USE_SSL'] = True
        app.config["SECRET_KEY"] = os.getenv("JWT_REFRESH_SECRET", "JWT_ACCESS_SECRET")
        async def connect_temporal(app):
            try:
                client = await Client.connect("localhost:7233")
                app.temporal_client = client
            except:
                pass

        
        def get_client() -> Client:
            return app.temporal_client
        
        @app.route("/sendmail/<email>")
        async def sendmail(email):
            client = get_client()
            await client.start_workflow(
                SendOTPWorkflow.run,
                email,
                id=email,
                task_queue=task_queue_name,
            )
            return jsonify("success")

        @app.route("/subscribe", methods=["POST"])
        async def start_subscription():
            email: str = str(request.json.get("email"))
            data: WorkflowOptions = WorkflowOptions(email=email)

            client = get_client()
            await client.start_workflow(
                SendOTPWorkflow.run,
                data,
                id=data.email,
                task_queue=task_queue_name,
            )

            message = jsonify({"message": "Resource created successfully"})
            response = make_response(message, 201)
            return response

        @app.route("/get_details", methods=["GET"])
        async def get_query():
            email = request.args.get("email")
            print(email)
            if not email:
                print("wtf")
                return jsonify("error")
            client = get_client()
            handle = client.get_workflow_handle(email)
            print(handle, "handle")
            results = await handle.query(SendOTPWorkflow.details)
            message = jsonify(
                {
                    "email": results.email,
                    "message": results.message,
                    "subscribed": results.subscribed,
                    "numberOfEmailsSent": results.count,
                }
            )
        
            response = make_response(message, 200)
            return response


        app.register_blueprint(user_bp)
        app.register_blueprint(transaction_bp)
        app.register_blueprint(product_bp)

        
        asyncio.run(connect_temporal(app))
    # if __name__ == "__main__":
    #     # Create Temporal connection.

    #     # Start API
    return app


create_app()