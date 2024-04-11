import random, string
from datetime import datetime, timedelta
from flask import Blueprint, abort, make_response, request, jsonify, current_app as app
import json

from ..temporal.workflow import SendOTPWorkflow
from ..temporal.shared_objects import task_queue_name

from ..models.Payments import Payments
from ..models.CartItems import CartItems
from ..models.Products import Products
from ..models.Carts import Carts
from ..models.Users import Users
from ..models.Addresses import Addresses
from temporalio.client import Client
from flask_bcrypt import Bcrypt
import jwt
bcrypt = Bcrypt(app)

def randomword(length):
   letters = string.ascii_lowercase
   return ''.join(random.choice(letters) for i in range(length))

def generate_token(id, minutes=0, days=0):
        payload = {"id": id, "exp": datetime.now() + timedelta(minutes=minutes, days=days)}
        token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
        return token

    # Verify JWT token
def verify_token(token):
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload['id']
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def signToken(id):
    accessToken = generate_token(str(id), minutes=15)
    refreshToken = generate_token(str(id), days=1)
    return {"accessToken": accessToken, "refreshToken": refreshToken}

user_bp = Blueprint("/user", __name__, url_prefix="/user")
@user_bp.post("/register")
async def signup():
    record = json.loads(request.data)
    email = record["email"]
    user_exist = Users.objects(email=email).first()
    if user_exist:
        return jsonify("User exist")
    hashedPassword = bcrypt.generate_password_hash(record["password"])
    newUser = Users(**record, password=hashedPassword, profilePic= f"https://robohash.org/{email}")
    client: Client = app.temporal_client    
    otp = await client.execute_workflow(
        SendOTPWorkflow.run,
        email,
        id=randomword(15),
        task_queue=task_queue_name,
    )
    print(otp)
    
    return jsonify("Otp created")


@user_bp.post("/login")
async def login():
    record = json.loads(request.data)
    email = record["email"]
    password = record["password"]
    if not email and not password:
        return jsonify({"error": "Email and password required"})
    user = Users.objects(email=email).first()
    if not user:
        return jsonify("user not found")
    comparePassword = bcrypt.check_password_hash(user.password, password)
    if not comparePassword:
        return jsonify("Wrong credentials")
    
    client: Client = app.temporal_client
    otp = await client.execute_workflow(
        SendOTPWorkflow.run,
        email,
        id=randomword(15),
        task_queue=task_queue_name,
    )
    user.otp = otp
    user.save()
    return jsonify("Otp created")
    


@user_bp.post("/verify")
def verify():
    record = json.loads(request.data)
    email = record["email"]
    otp = record["code"]
    user = Users.objects(email=email).first()
    if not user:
        return jsonify("Users not found"), 400
    # Implement otp
    if otp != user.otp:
        return jsonify("Wrong credentials"), 400

    tokens = signToken(str(user.id))
    user.refreshToken = tokens["refreshToken"]
    user.save()
    user = user.to_json()
    user["accessToken"] = tokens["accessToken"]
    resp =  make_response(user)
    resp.set_cookie("refreshToken",tokens["refreshToken"],httponly=True)
    return resp


@user_bp.post("/verify/refresh")
async def refreshOTP():
    record = json.loads(request.data)
    email = record["email"]
    user = Users.objects(email=email)
    if not user: 
        return jsonify("Wrong credentials"), 403
    client: Client = app.temporal_client
    otp = await client.execute_workflow(
        SendOTPWorkflow.run,
        email,
        id=randomword(15),
        task_queue=task_queue_name,
    )
    user.otp = otp
    user.save()
    return jsonify("Otp refreshed")

@user_bp.get("/refresh")
def refreshTokens():
    refreshCookie = request.cookies["refreshToken"]
    if not refreshCookie:
        return jsonify("refresh cookie not found"), 403
    
    id = verify_token(refreshCookie)
    if not id:
        return jsonify("Invalid credentials"), 403
    user = Users.objects(pk=id).first()
    if not user:
        return jsonify("User not found, please re-login"), 500

    record = signToken(str(user.id))
    user.refreshToken = record["refreshToken"]
    user.save()
    user = user.to_json()
    user["accessToken"] = record["accessToken"]
    resp =  make_response({"token": record["accessToken"]})
    resp.set_cookie("refreshToken",record["refreshToken"],httponly=True)
    return resp
    




@user_bp.post("/profile")
def createProfile():
    record = json.loads(request.data)
    userId = record["userId"]
    newAddress = Addresses(**record)
    newAddress.cascade_save()
    newAddress.save()
    Users.objects(pk=userId).first().update(address=newAddress)
    return jsonify("profile created")
    


@user_bp.put("/profile")
def updateProfile():
    record = json.loads(request.data)
    try:
        user = Users.objects(email=record["email"]).first()
        user.update(**record)
        return jsonify(user.to_json())
    except:
        return jsonify("User not found")
    


@user_bp.get("/profile/<id>")
def getProfile(id):    
    user = Users.objects(pk=id).first()
    if not user:
        return jsonify("Users not found")
    return jsonify(user.to_json())


@user_bp.get("/cart/<userId>/<cartId>")
def getCarts():
    userId = request.args.get("userId")
    cartId = request.args.get("cartId")
    cart = Carts.objects(pk=cartId).first()
    if not cart:
        cart = Carts(userId=userId).save()

    user = Users.objects(pk=userId).update(cart=cart)
    user.save()
    return jsonify(cart)


@user_bp.get("/account/<id>")
def getPaymentDetails(id):
    payment = Payments.objects(pk=id).first()
    if not payment:
        return jsonify("Payment details not found")
    return jsonify(payment.to_json())


@user_bp.post("/cart")
def addToCarts():
    record = json.loads(request.data)
    cartId = record["cartId"]
    itemId = record["itemId"]
    product = Products.objects(pk=itemId).first()
    if not product:
        return jsonify("Product not found"), 400
    
    cartItem = CartItems.objects(itemId=itemId, cartId=cartId).first()
    if not cartItem:
        cartItem = CartItems(itemId=product.id, cartId=cartId)
        cartItem.save()

    cart = Carts.objects(pk=cartId).first()
    if not cart:
        return jsonify("Cart not found"), 400
    match = [item for item in cart.itemIds if str(item.itemId) == str(cartItem.itemId)]
    if match[0]:
        return jsonify(cart)
    cart.itemIds.append(cartItem.id)
    cart.save()
    return jsonify(cart.to_json())



@user_bp.delete("/cart/<id>")
def clearCarts(id):
    cart = Carts.objects(pk=id).first()
    if not cart:
        return jsonify("Cart not found")
    cart.delete()
    return jsonify("Cart deleted")



@user_bp.post("/account/<id>")
def addPaymentDetails(id):
    record = json.loads(request.data)
    user = Users.objects(pk=id).first()
    if not user:
        return jsonify("Users not found")
    payment = Payments(**record).save()
    user.payment = payment.id
    user.save()
    return jsonify("payment details added successfully")


@user_bp.put("/cart/item/<id>")
def updateCartItem(id):
    record = json.loads(request.data)
    cartItem = CartItems.objects(pk=id).first()
    if not cartItem:
        return jsonify("Cart item not found")
    cartItem.update(**record)
    return jsonify(cartItem.to_json())
    


@user_bp.delete("/cart/item/<id>")
def deleteCartsItem(id):
    cartItem = CartItems.objects(pk=id).first()
    if not cartItem:
        return jsonify("Cart item not found")
    cartItem.delete()
    return jsonify("Cart item deleted")
    


@user_bp.put("/account/<id>")
def updatePaymentDetails(id):
    record = json.loads(request.data)
    payment = Payments.objects(userId=id).first()
    if not payment:
        return jsonify("Payment not found")
    payment.update(**record)
    return jsonify("payment updated")
    


