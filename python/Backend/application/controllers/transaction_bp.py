from flask import Blueprint, abort, request, jsonify
from application.models.Orders import Orders
import json

transaction_bp = Blueprint("/transactions", __name__, url_prefix="/transaction")



@transaction_bp.post("/order")
def orderProduct():
    record = json.loads(request.data)
    newOrder = Orders(userId=record["userId"], cartId=record["cartId"], status=record["status"], amount=record["amount"])
    newOrder.save()
    return jsonify({"success": "Order placed"})
    



@transaction_bp.patch("/order/cancel/<id>")
def cancelOrder(id):
    order = Orders.objects(pk=id).first()
    if not order:
        return jsonify({"error": "Order not found"})
    print(order)
    order.delete()
    return jsonify({"success": "Order cancelled"})
    


@transaction_bp.get("/order/<id>/")
@transaction_bp.get("/order/<id>/<page>")
def getOrders(id, page):
    orders = Orders.objects(userId=id)
    return jsonify([order.to_json() for order in orders])


@transaction_bp.post("/payment")
def purchaseProduct():
    pass



@transaction_bp.get("/shipping")
def getShippings():
    pass



@transaction_bp.post("/shipping")
def shipProduct():
    pass



@transaction_bp.post("/unsubscribe/<workflowId>")
def unSubscribe():
    pass


