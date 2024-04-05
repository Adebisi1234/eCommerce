from flask import Blueprint, abort, request, jsonify
import json
from ..models.Products import Products
from ..models.Categories import Categories

product_bp = Blueprint("/", __name__)

@product_bp.get("/")
def getAllProducts():
    limit = request.args.get("limit")
    skip = request.args.get("skip")
    if not limit:
        limit = 0
    if not skip:
        skip = 0
        
    products = Products.objects().skip(int(skip)).limit(int(limit))
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
    newProduct = Products(**body)
    newProduct.save()
    return jsonify(newProduct.to_json())

@product_bp.put("/<id>")
def updateProduct(id):
    record = json.loads(request.data)
    product = Products.objects(pk=id).first()
    if not product:
        return jsonify("Product not found"), 400
    product.update(**record)
    return jsonify(product.to_json())

@product_bp.delete("/<id>")
def deleteProduct(id):
    Products.objects(pk=id).first().delete()
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
    

@product_bp.get("/category")
def getAllCategories():
    categories = Categories.objects()
    return jsonify([category.to_json() for category in categories])

@product_bp.put("/category/<name>")
def updateCategory(name):
    record = json.loads(request.data)
    category = Categories.objects(name=name).first()
    if not category:
        return jsonify("Category not found"), 400
    category.update(**record)
    return jsonify(category)