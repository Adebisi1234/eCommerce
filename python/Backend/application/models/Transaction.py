from application.models.db import * 
from application.models.Order import Order
from application.models.User import User
class Transaction(Document):
    orderId= ReferenceField(Order)
    userId= ReferenceField(User, reverse_delete_rule=CASCADE)
    paymentMethod=StringField()
    status=StringField()
    paymentLog=StringField()

    def to_json(self):
        return {
            "orderId": self.orderId,
            "userId": self.userId,
            "paymentMethod": self.paymentMethod,
            "paymentLog": self.paymentLog,
            "status": self.status
        }
    