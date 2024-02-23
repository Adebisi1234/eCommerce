from datetime import datetime
from application.models.db import *

class Category(Document):
    timestamps = DateTimeField(default=datetime.utcnow())
    name= StringField(required=True)
    desc=StringField(required=True)
    def to_json(self):
        return {
            "timestamps": self.timestamps,
            "name": self.name,
            "desc": self.desc,
        }