from datetime import datetime
from application.models.db import *

from application.models.CartItem import CartItem
class Cart(Document):
    userId= ObjectIdField()
    itemIds=ListField(ReferenceField(CartItem))
    total=IntField(min_value=0, default=0)
    timestamps= DateTimeField(default=datetime.utcnow())
    def to_json(self):
        return {
            "userId": self.userId,
            "itemIds": self.itemIds,
            "total": self.total,
            "timestamps": self.timestamps,
        }