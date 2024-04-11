from datetime import datetime
from ..models.db import *
from ..models.Orders import Orders
from ..models.Users import Users
from ..models.Addresses import Addresses

class Shippings(DynamicDocument):
    address = ReferenceField(Addresses)
    customerId = ReferenceField(Users)
    sellerId = ReferenceField(Users)
    orderId = ReferenceField(Orders)
    status = StringField()

    def to_json(self):
        shipping_data = {
            'address': self.address.to_json(),
            'sellerId': self.sellerId.to_json(),
            'customerId': self.customerId.to_json(),
            'orderId': self.orderId.to_json(),
            "status": self.status
        }
        return shipping_data