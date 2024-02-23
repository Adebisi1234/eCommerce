from flask import Blueprint, abort, request, jsonify
from application.models.Order import Order

transaction_bp = Blueprint("/transactions", __name__)



@transaction_bp.post("/order")
def orderProduct():
    pass



@transaction_bp.patch("/order/cancel/<id>")
def cancelOrder():
    pass


@transaction_bp.get("/order/<id>/")
@transaction_bp.get("/order/<id>/<page>")
def getOrders(id, page):
    orders = Order.objects(pk=id)
    return jsonify(orders)


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


