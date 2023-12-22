import { validateProduct } from "../utils/validation.js";
import { Product } from "../models/Product.js";
export const getAllProducts = async (req, res) => {
    console.log(getAllProducts);
};
export const getProduct = async (req, res) => {
    console.log("getProduct");
};
export const addProduct = async (req, res) => {
    try {
        const body = validateProduct(req.body);
        if (!body) {
            return res.sendStatus(400);
        }
        const newProduct = await new Product({ ...body }).save();
        if (!newProduct) {
            return res.sendStatus(500);
        }
        return res.status(200).json(newProduct);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(500).json(err.message);
        }
        if (typeof err === "string") {
            return res.status(500).json(err);
        }
    }
};
export const updateProduct = async (req, res) => {
    console.log("updateProduct");
};
export const deleteProduct = async (req, res) => {
    console.log("deleteProduct");
};
export const getCategory = async (req, res) => {
    console.log("getCategory");
};
export const getAllCategories = async (req, res) => {
    console.log("getAllCategories");
};
export const addCategory = async (req, res) => {
    console.log("addCategory");
};
export const updateCategory = async (req, res) => {
    console.log("updateCategory");
};
export const addDeals = async (req, res) => {
    console.log("addDeals");
};
export const updateDeals = async (req, res) => {
    console.log("updateDeals");
};
export const deleteDeals = async (req, res) => {
    console.log("deleteDeals");
};
