from flask import Blueprint, abort, request, jsonify
import json
from application.models.Products import Products
from application.models.Categories import Categories

product_bp = Blueprint("/", __name__)

@product_bp.get("/")
def getAllProducts():
    limit = request.args.get("limit")
    skip = request.args.get("skip")
    products = Products.objects()
    if not products:
        return jsonify("Products not found"), 500
    arr = [x.to_json() for x in products]
    
    return jsonify(arr)
    

@product_bp.get("/<id>")
def getProduct(id):
    product = Products.objects(pk=id).first()
    if not product:
        return jsonify("Products not found"), 400
    return jsonify(product.to_json())


@product_bp.post("/")
def addProduct():
    body = json.loads(request.data)
    newProduct = Products(name=body["name"], desc=body["desc"], price=body["price"], availability=body["availability"], sellerId=body["sellerId"], stockUnit=body["stockUnit"])
    newProduct.save()
    return jsonify(newProduct)


@product_bp.delete("/<id>")
def deleteProduct(id):
    Products.objects(pk=id).delete()
    return 201
    

@product_bp.get("/category/<name>")
def getCategoryProducts(name):
    products = Products.objects(category=name)
    if not products:
        return jsonify("Products not found")
    return jsonify([product.to_json() for product in products])
    

@product_bp.post("/category")
def addCategory():
    record = json.loads(request.data)
    newCat = Categories(name=record["name"], desc=record["desc"])
    newCat.save()
    return jsonify(newCat.to_json())
    

@product_bp.put("/category/<name>")
def updateCategory(name):
    pass

@product_bp.get("/category")
def getAllCategories():
    categories = Categories.objects()
    return jsonify([category.to_json() for category in categories])

