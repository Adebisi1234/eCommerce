from datetime import datetime
from application.models.db import *


class Order(EmbeddedDocument):
    userId= ObjectIdField()
    cartId=ObjectIdField()
    status=StringField()
    amount=IntField(required=True)
    timestamps = DateTimeField(default=datetime.utcnow())
    def to_json(self):
        return {
            "userId": self.userId,
            "cartId": self.cartId,
            "status": self.status,
            "amount": self.amount,
            "timestamps": self.timestamps,
        }
