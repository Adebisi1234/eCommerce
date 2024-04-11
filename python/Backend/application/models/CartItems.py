from datetime import datetime
from..models.db import *



class CartItems(DynamicDocument):
    timestamps = DateTimeField(default=datetime.utcnow())
    cartId=ObjectIdField()
    itemId= ListField(ObjectIdField())
    itemQty=IntField(default=1)
    def to_json(self):
        return {
            "timestamps": self.timestamps,
            "cartId": self.cartId,
            "itemId": self.itemId,
            "itemQty": self.itemQty,
        }