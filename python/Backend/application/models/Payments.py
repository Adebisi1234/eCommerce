from datetime import datetime
from application.models.db import *


class Payments(DynamicDocument):
    userId= ObjectIdField()
    bankAccount= IntField(required=True)
    payment=StringField(required=True)
    timestamps = DateTimeField(default=datetime.utcnow())
    def to_json(self):
        return {
            "userId": self.userId,
            "bankAccount": self.bankAccount,
            "payment": self.payment,
            "timestamps": self.timestamps,
        }