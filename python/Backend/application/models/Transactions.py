from application.models.db import * 
from application.models.Orders import Orders
from application.models.Users import Users
class Transactions(DynamicDocument):
    orderId= ReferenceField(Orders)
    userId= ReferenceField(Users, reverse_delete_rule=CASCADE)
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
    