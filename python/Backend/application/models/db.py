from mongoengine import *
import os

DB_USER = os.getenv('DB_USER')
DB_PWD = os.getenv('DB_PWD')
def init_db():
    connect(host=f"mongodb+srv://{DB_USER}:{DB_PWD}@cluster0.zwtcqv0.mongodb.net/?retryWrites=true&w=majority")