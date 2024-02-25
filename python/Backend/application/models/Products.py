from application.models.db import *
from application.models.Users import Users
class Products(DynamicDocument):
    _id= ObjectIdField(primary_key=True)
    name = StringField()
    desc = StringField()
    category= StringField()
    thumbnail = StringField()
    images= ListField(StringField())
    price = IntField()
    discount = FloatField()
    brand = StringField()
    availability = BooleanField(default=True)
    stockUnit= IntField()
    

    
    def to_json(self):
        return {
            "_id": str(self._id),
            "name": self.name,
            "desc": self.desc,
            "category": self.category,
            "thumbnail": self.thumbnail,
            "images": self.images,
            "price": self.price,
            "discount": self.discount,
            "brand": self.brand,
            "availability": self.availability,
            "stockUnit": self.stockUnit,
        }
