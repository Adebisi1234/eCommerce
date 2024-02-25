from flask import Blueprint, abort, request, jsonify, current_app as app
import json
from application.models.Carts import Carts
from application.models.Users import Users
from application.models.Addresses import Addresses
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

user_bp = Blueprint("/user", __name__, url_prefix="/user")
@user_bp.post("/register")
def signup():
    record = json.loads(request.data)
    user_exist = Users.objects(email=record["email"]).first()
    if user_exist:
        return jsonify({"error": "Users exist"})
    hashedPassword = bcrypt.generate_password_hash(record["password"])
    newUsers = Users(phone=record["phone"], name=record["name"], email=record["email"], password=hashedPassword)
    newUsers.save()
    return jsonify({"success": "Working on OTP"})


@user_bp.post("/login")
def login():
    record = json.loads(request.data)
    if not record["email"] and not record["password"]:
        return jsonify({"error": "Email and password required"})
    user = Users.objects(email=record["email"]).first()
    if not user:
        return jsonify({"error": "user not found"})
    comparePassword = bcrypt.check_password_hash(user.password, record["password"])
    if not comparePassword:
        return jsonify({"error": "Wrong credentials"})
    # Implement jwt
    
    # import jwt
    # from datetime import datetime, timedelta

    # # Generate JWT token
    # def generate_token(user_id):
    #     payload = {
    #         'user_id': user_id,
    #         'exp': datetime.utcnow() + timedelta(days=1)
    #     }
    #     token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
    #     return token

    # # Verify JWT token
    # def verify_token(token):
    #     try:
    #         payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
    #         return payload['user_id']
    #     except jwt.ExpiredSignatureError:
    #         return None
    #     except jwt.InvalidTokenError:
    #         return None

    # # Use JWT in login route
    # token = generate_token(str(user.id))
    # return jsonify({"success": user.to_json(), "token": token})
    return jsonify({"success": user.to_json()})
    


@user_bp.post("/verify")
def verify():
    record = json.loads(request.data)
    user = Users.objects(email=record["email"]).first()
    Users.obj
    if not user:
        return jsonify({"error": "Users not found"})
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
    newAddress = Addresses(addressLine1=addressLine1, addressLine2=addressLine2, city=city, postCode=postCode, country=country, userId=userId)
    user = Users.objects(pk=userId).update(address=newAddress)
    newAddress.cascade_save()
    user.cascade_save()
    pass


@user_bp.put("/profile")
def updateProfile():
    pass


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


@user_bp.get("/account")
def getPaymentDetails():
    pass


@user_bp.post("/cart")
def addToCarts():
    pass


@user_bp.delete("/cart/<id>")
def clearCarts():
    pass


@user_bp.post("/account")
def addPaymentDetails():
    pass


@user_bp.put("/cart/item/<id>")
def updateCartsItem():
    pass


@user_bp.delete("/cart/item/<id>")
def deleteCartsItem():
    pass


@user_bp.put("/account")
def updatePaymentDetails():
    pass


