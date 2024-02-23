from application.models.db import *

from application.models.Address import Address
from application.models.Cart import Cart
from application.models.Payment import Payment
from application.models.Order import Order

class UserOrder(EmbeddedDocument):
    products= EmbeddedDocumentListField(Order)
    def to_json(self):
        return {
            "products": self.products
        }
    


class User(Document):
    phone = IntField(required=True, unique=True)
    email= EmailField()
    profilePic=StringField()
    password=StringField(required=True)
    userType=StringField(default="Buyer", required=True)
    name= StringField()
    address=ReferenceField(Address, reverse_delete_rule=CASCADE)
    cart=ReferenceField(Cart, reverse_delete_rule=CASCADE)
    payment= ReferenceField(Payment, reverse_delete_rule=CASCADE)
    verified=BooleanField(default=False)
    refreshToken=StringField(select=False)
    otp=IntField()
    order=EmbeddedDocumentField(UserOrder)


    def to_json(self):
        return {
            "name": self.name,
            "email": self.email,
            "profilePic": self.profilePic,
            "password": self.password,
            "userType": self.userType,
            "name": self.name,
            "address": self.address,
            "cart": self.cart,
            "payment": self.payment,
            "verified": self.verified,
            "otp": self.otp,
            "phone": self.phone,
            "order": self.order
            }

