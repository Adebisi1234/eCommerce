import asyncio
from flask_mail import Message, Mail
from flask import Flask, request, jsonify, make_response
from temporalio.client import Client
from .application.temporal.workflow import SendEmailWorkflow
from .application.temporal.shared_objects import WorkflowOptions, task_queue_name
from .application.models.db import init_db
from dotenv import load_dotenv
load_dotenv()
import os

def create_app():
    app = Flask(__name__)

    with app.app_context():
        from .application.controllers.user_bp import user_bp
        from .application.controllers.product_bp import product_bp
        from .application.controllers.transaction_bp import transaction_bp
        init_db()
        app.config['MAIL_SERVER']='smtp.gmail.com'
        app.config['MAIL_PORT'] = 465
        app.config['MAIL_USERNAME'] = os.getenv("MAIL_USER")
        app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
        app.config['MAIL_USE_TLS'] = False
        app.config['MAIL_USE_SSL'] = True
        mail = Mail(app)
        async def connect_temporal(app):
            client = await Client.connect("localhost:7233")
            app.temporal_client = client
        
        def get_client() -> Client:
            return app.temporal_client
        @app.route("/subscribe", methods=["POST"])
        async def start_subscription():
            client = get_client()

            email: str = str(request.json.get("email"))
            data: WorkflowOptions = WorkflowOptions(email=email)
            await client.start_workflow(
                SendEmailWorkflow.run,
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
            results = await handle.query(SendEmailWorkflow.details)
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

        @app.route("/sendmail")
        def send_mail():
            msg = Message("Hello", sender="ti.adebisi@gmail.com", recipients=["oluwatobilobaadebisi6@gmail.com"], body="Hello world")
            mail.send(msg)


        app.register_blueprint(user_bp)
        app.register_blueprint(transaction_bp)
        app.register_blueprint(product_bp)


        asyncio.run(connect_temporal(app))
    # if __name__ == "__main__":
    #     # Create Temporal connection.

    #     # Start API
    return app


create_app()