from datetime import datetime
from ..models.db import *

from ..models.CartItems import CartItems
class Carts(DynamicDocument):
    userId= ObjectIdField()
    itemIds=ListField(ReferenceField(CartItems, reverse_delete_rule=CASCADE))
    total=IntField(min_value=0, default=0)
    timestamps= DateTimeField(default=datetime.now())
    def to_json(self):
        return {
            "userId": str(self.userId),
            "itemIds": [x.to_json() for x in self.itemIds],
            "total": self.total,
            "timestamps": self.timestamps,
        }