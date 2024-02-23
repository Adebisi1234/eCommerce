from mongoengine import *
from dotenv import load_dotenv
import os
load_dotenv()

DB_USER = os.getenv('DB_USER')
DB_PWD = os.getenv('DB_PWD')

connect(host=f"mongodb+srv://{DB_USER}:{DB_PWD}@cluster0.zwtcqv0.mongodb.net/?retryWrites=true&w=majority")