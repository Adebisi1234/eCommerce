from application.models.db import *

from application.models.Addresses import Addresses
from application.models.Carts import Carts
from application.models.Payments import Payments
from application.models.Orders import Orders

class UsersOrder(EmbeddedDocument):
    products= ListField(ReferenceField(Orders))
    def to_json(self):
        return {
            "products": self.products
        }
    


class Users(DynamicDocument):
    phone = IntField(required=True, unique=True)
    email= EmailField()
    profilePic=StringField()
    password=StringField(required=True)
    userType=StringField(default="Buyer", required=True)
    name= StringField()
    address=ReferenceField(Addresses, reverse_delete_rule=CASCADE)
    cart=ReferenceField(Carts, reverse_delete_rule=CASCADE)
    payment= ReferenceField(Payments, reverse_delete_rule=CASCADE)
    verified=BooleanField(default=False)
    refreshToken=StringField(select=False)
    otp=IntField()
    order=ListField(ObjectIdField())


    def to_json(self):
        return {
            "name": self.name,
            "email": self.email,
            "profilePic": self.profilePic,
            "userType": self.userType,
            "name": self.name,
            "address": self.address,
            "cart": self.cart.to_json(),
            "payment": self.payment,
            "verified": self.verified,
            "otp": self.otp,
            "phone": self.phone,
            "order": [str(x) for x in self.order],
            "_id": str(self.id)
            }

