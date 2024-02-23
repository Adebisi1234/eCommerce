from application.models.db import *
from application.models.User import User
class Product(Document):
    name = StringField()
    desc = StringField()
    category= StringField()
    rating = FloatField()
    thumbnail = StringField()
    images= ListField(StringField())
    price = IntField()
    discount = FloatField()
    brand = StringField()
    availability = BooleanField(default=True)
    sellerId = ReferenceField(User, reverse_delete_rule=CASCADE)
    stockUnit= IntField()

    
    def to_json(self):
        return {
            "name": self.name,
            "desc": self.desc,
            "category": self.category,
            "rating": self.rating,
            "thumbnail": self.thumbnail,
            "images": self.images,
            "price": self.price,
            "discount": self.discount,
            "brand": self.brand,
            "availability": self.availability,
            "sellerId": self.sellerId,
            "dealId": self.dealId,
            "stockUnit": self.stockUnit,
        }
