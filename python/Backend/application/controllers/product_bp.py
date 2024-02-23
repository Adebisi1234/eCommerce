from flask import Blueprint, abort, request, jsonify
import json
from application.models.Product import Product
from application.models.Category import Category

product_bp = Blueprint("/", __name__)

@product_bp.get("/")
def getAllProducts():
    limit = request.args.get("limit")
    skip = request.args.get("skip")
    products = Product.objects()
    if not products:
        return jsonify("Products not found"), 500
    return jsonify(products)
    

@product_bp.get("/<id>")
def getProduct(id):
    product = Product.objects(pk=id)
    if not product:
        return jsonify("Product not found"), 400
    return jsonify(product)


@product_bp.post("/")
def addProduct():
    body = json.loads(request.data)
    newProduct = Product(name=body["name"], desc=body["desc"], price=body["price"], availability=body["availability"], sellerId=body["sellerId"], stockUnit=body["stockUnit"])
    newProduct.save()
    return jsonify(newProduct)


@product_bp.delete("/<id>")
def deleteProduct(id):
    Product.objects(pk=id).delete()
    return 201
    

@product_bp.get("/category/<name>")
def getCategoryProducts(name):
    products = Product.objects(category=name)
    if not products:
        return jsonify("Products not found")
    return jsonify(products)
    

@product_bp.post("/category")
def addCategory():
    record = json.loads(request.data)
    newCat = Category(name=record["name"], desc=record["desc"])
    newCat.save()
    return jsonify(newCat)
    

@product_bp.put("/category/<name>")
def updateCategory(name):
    pass

@product_bp.get("/category")
def getAllCategories():
    categories = Category.objects()
    return jsonify(categories)

