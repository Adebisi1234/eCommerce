from flask import Blueprint, abort, request, jsonify, make_response
import json
from application.models.Cart import Cart
from application.models.User import User
from werkzeug.security import check_password_hash
from werkzeug.security import generate_password_hash
from application.models.Address import Address

user_bp = Blueprint("/user", __name__)
@user_bp.post("/register")
def signup():
    record = json.loads(request.data)
    user_exist = User.objects(email=record["email"]).first()
    if user_exist:
        return jsonify({"error": "User exist"})
    hashedPassword = generate_password_hash(record["password"])
    newUser = User(phone=record["phone"], name=record["name"], email=record["email"], address=record["address"], password=hashedPassword)
    newUser.save()
    return jsonify({"success": "Working on OTP"})


@user_bp.post("/login")
def login():
    record = json.loads(request.data)
    if not record["email"] and not record["password"]:
        return jsonify({"error": "Email and password required"})
    user = User.objects(email=record["email"]).first()
    if not user:
        return jsonify({"error": "user not found"})
    comparePassword = check_password_hash(user.password, record["password"])
    if not comparePassword:
        return json({"error": "Wrong credentials"})
    
    return jsonify({"success": user.to_json()})
    


@user_bp.post("/verify")
def verify():
    record = json.loads(request.data)
    user = User.objects(email=record["email"]).first()
    User.obj
    if not user:
        return jsonify({"error": "User not found"})
    # Implement otp
    resp =  jsonify({"user": user.to_json()})
    resp.set_cookie("accessToken","asldfalkfdjlasdfka",httponly=True)
    pass


@user_bp.post("/verify/refresh")
def refreshOTP():
    # refreshCookie = request.cookies["refreshToken"]
    # if not refreshCookie:
    #     return jsonify("refresh cookie not found")
    
    pass


@user_bp.get("/refresh")
def refreshTokens():
    pass



@user_bp.post("/profile")
def createProfile():
    record = json.loads(request.data)
    addressLine1 = record["addressLine1"]
    addressLine2 = record["addressLine2"]
    city = record["city"]
    postCode = record["postCode"]
    country = record["country"]
    userId = record["userId"]
    newAddress = Address(addressLine1=addressLine1, addressLine2=addressLine2, city=city, postCode=postCode, country=country, userId=userId)
    user = User.objects(pk=userId).update(address=newAddress)
    newAddress.cascade_save()
    user.cascade_save()
    pass


@user_bp.put("/profile")
def updateProfile():
    pass


@user_bp.get("/profile/<id>")
def getProfile(): 
    id = request.args.get("id")
    user = User.objects(pk=id).first()
    if not user:
        return jsonify("User not found")
    return jsonify(user.to_json())


@user_bp.get("/cart/<userId>/<cartId>")
def getCart():
    userId = request.args.get("userId")
    cartId = request.args.get("cartId")
    cart = Cart.objects(pk=cartId).first()
    if not cart:
        cart = Cart(userId=userId).save()

    user = User.objects(pk=userId).update(cart=cart)
    user.save()
    return jsonify(cart)


@user_bp.get("/account")
def getPaymentDetails():
    pass


@user_bp.post("/cart")
def addToCart():
    pass


@user_bp.delete("/cart/<id>")
def clearCart():
    pass


@user_bp.post("/account")
def addPaymentDetails():
    pass


@user_bp.put("/cart/item/<id>")
def updateCartItem():
    pass


@user_bp.delete("/cart/item/<id>")
def deleteCartItem():
    pass


@user_bp.put("/account")
def updatePaymentDetails():
    pass


