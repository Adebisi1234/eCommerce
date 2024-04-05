from flask import Blueprint, abort, request, jsonify, current_app as app
from ..models.Orders import Orders
from ..models.Products import Products
from ..models.Users import Users
from ..models.Shippings import Shippings
from ..temporal.workflow import SendReceiptWorkflow
from ..temporal.shared_objects import task_queue_name
import json
from temporalio.client import Client

transaction_bp = Blueprint("/transactions", __name__, url_prefix="/transaction")



@transaction_bp.post("/order")
async def orderProduct():
    record = json.loads(request.data)
    email = record["email"]
    newOrder = Orders(**record)
    newOrder.save()
    user = Users.objects(pk=record["userId"])
    if not user:
        return jsonify("user not found")
    user.order.append(newOrder.pk)
    newOrder.save()
    user.save()
    client: Client = app.temporal_client
    await client.start_workflow(
        SendReceiptWorkflow.run,
        email,
        id=newOrder.pk,
        task_queue=task_queue_name,
    )
    
    return jsonify({"workflowId": newOrder.pk, "orderId": newOrder.pk})
    



@transaction_bp.patch("/order/cancel/<id>")
def cancelOrder(id):
    client: Client = app.temporal_client
    workflow = client.get_workflow_handle(id)
    if not workflow:
        return jsonify("Process may be unsuccessful"),203
    workflow.cancel()
    return jsonify("deleted")
    


@transaction_bp.get("/order/<id>/")
@transaction_bp.get("/order/<id>/<page>")
def getOrders(id, page = 0):
    orders = Orders.objects(userId=id).skip(page).limit(20)
    return jsonify([order.to_json() for order in orders])


@transaction_bp.post("/payment")
def purchaseProduct():
    record = json.loads(request.data)
    product = Products.objects(pk=record["productId"])
    if product.stockUnit > 0:
        product.stockUnit-= 1
    order = Orders(**record).save()
    user = Users.objects(pk=record["userId"]).first()
    user.order.append(order.pk)
    user.save()
    return jsonify("Order created")



@transaction_bp.get("/shipping")
@transaction_bp.get("/shipping/<page>")
def getShippings(page=0):
    shippings = Shippings.objects().skip(page).limit(20)
    return jsonify(shippings.to_json())
    



@transaction_bp.post("/shipping")
def shipProduct():
    record = json.loads(request.data)
    shipping = Shippings(**record)
    shipping.save()
    return jsonify(shipping.to_json())



@transaction_bp.post("/unsubscribe/<workflowId>")
def unSubscribe(workflowId):
    client: Client = app.temporal_client
    workflow = client.get_workflow_handle(workflowId)
    if not workflow:
        return jsonify("Process may be unsuccessful"),203
    workflow.signal("cancelPurchase")
    return jsonify("canceled")


