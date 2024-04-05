from datetime import datetime
from..models.db import *

class Addresses(DynamicDocument):
    userId= ObjectIdField()
    addressLine1= StringField(required=True)
    addressLine1= StringField()
    timestamps= DateTimeField(default=datetime.now())
    city= StringField()
    postCode=StringField()
    country=StringField()

    def to_json(self):
        return {
            "userId": str(self.userId),
            "addressLine1": self.addressLine1,
            "addressLine1": self.addressLine1,
            "timestamps": self.timestamps,
            "city": self.city,
            "postCode": self.postCode,
            "country": self.country,
        }