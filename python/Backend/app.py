from flask import Flask

from application.models.db import init_db

def create_app():
    app = Flask(__name__)

    with app.app_context():
        init_db()
        from application.controllers.user_bp import user_bp
        from application.controllers.product_bp import product_bp
        from application.controllers.transaction_bp import transaction_bp

        app.register_blueprint(user_bp)
        app.register_blueprint(transaction_bp)
        app.register_blueprint(product_bp)

        """ 
         async def connect_temporal(app):
    client = await Client.connect("localhost:7233")
    app.temporal_client = client


def get_client() -> Client:
    return current_app.temporal_client


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
    client = get_client()
    email = request.args.get("email")
    handle = client.get_workflow_handle_for(SendEmailWorkflow.run, email)
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


@app.route("/unsubscribe", methods=["DELETE"])
async def end_subscription():
    client = get_client()
    email: str = str(request.json.get("email"))
    handle = client.get_workflow_handle(
        email,
    )
    await handle.cancel()
    message = jsonify({"message": "Requesting cancellation"})

    # Return 202 because this is a request to cancel and the API has accepted
    # the request but has not processed yet.
    response = make_response(message, 202)
    return response
           """
        

    return app


# mailer = Mail(app)

# @app.route('/', methods=['GET'])
# def query_records():
#     request.get_json()
#     name = request.args.get('name')
#     user = Users.objects(name=name).first()
#     if not user:
#         return jsonify({'error': 'data not found'})
#     else:
#         return jsonify(user.to_json())

# @app.route('/', methods=['PUT'])
# def create_record():
#     record = json.loads(request.data)
#     user = Users(name=record['name'],
#                 email=record['email'])
#     user.save()
#     return jsonify(user.to_json())

# @app.route('/', methods=['POST'])
# def update_record():
#     record = json.loads(request.data)
#     user = Users.objects(name=record['name']).first()
#     if not user:
#         return jsonify({'error': 'data not found'})
#     else:
#         user.update(email=record['email'])
#     return jsonify(user.to_json())

# @app.route('/', methods=['DELETE'])
# def delete_record():
#     record = json.loads(request.data)
#     user = Users.objects(name=record['name']).first()
#     if not user:
#         return jsonify({'error': 'data not found'})
#     else:
#         user.delete()
#     return jsonify(user.to_json())

# if __name__ == "__main__":
#     app.run(debug=True)




#     # apply the blueprints to the app
#     from . import auth
#     from . import blog

#     app.register_blueprint(auth.bp)
#     app.register_blueprint(blog.bp)

#     # make url_for('index') == url_for('blog.index')
#     # in another app, you might define a separate main index here with
#     # app.route, while giving the blog blueprint a url_prefix, but for
#     # the tutorial the blog will be the main index
#     app.add_url_rule("/", endpoint="index")
