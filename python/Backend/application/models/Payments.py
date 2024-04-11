from datetime import datetime
from..models.db import *


class Payments(DynamicDocument):
    userId= ObjectIdField()
    bankAccount= IntField(required=True)
    payment=StringField(required=True)
    timestamps = DateTimeField(default=datetime.now())
    def to_json(self):
        return {
            "userId": str(self.userId),
            "bankAccount": self.bankAccount,
            "payment": self.payment,
            "timestamps": self.timestamps,
        }