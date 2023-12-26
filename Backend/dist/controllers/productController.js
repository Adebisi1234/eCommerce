import { validateCategory, validateProduct, validateUpdateCategory, validateUpdateProduct, } from "../utils/validation.js";
import { Product } from "../models/Product.js";
import { Category } from "../models/Category.js";
export const getAllProducts = async (req, res) => {
    try {
        const { limit, skip, sort } = req.query;
        const products = await Product.find()
            .skip(skip && isNaN(+skip) ? +skip : 0)
            .limit(limit && isNaN(+limit) ? +limit : 0)
            .sort(typeof sort === "string" &&
            ["asc", "desc", "ascending", "descending", 1, -1].includes(sort)
            ? `${sort}`
            : "");
        if (!products) {
            return res.status(500).json("No product found");
        }
        return res.status(200).json(products);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json("product not found");
        }
        return res.status(200).json(product);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
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
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const updateProduct = async (req, res) => {
    try {
        const validObj = validateUpdateProduct(req.body);
        const product = await Product.findByIdAndUpdate(validObj._id, {
            ...validObj,
        });
        if (!product) {
            return res.status(400).json("Product not found");
        }
        return res.status(200).json(product);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        return res.sendStatus(201);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(400).json("Category not found");
        }
        return res.status(200).json(category);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if (!categories) {
            return res.status(500).json("No Category found");
        }
        return res.status(200).json(categories);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const addCategory = async (req, res) => {
    try {
        const body = validateCategory(req.body);
        if (!body) {
            return res.sendStatus(400);
        }
        const newCategory = await new Category({ ...body }).save();
        if (!newCategory) {
            return res.sendStatus(500);
        }
        return res.status(200).json(newCategory);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const updateCategory = async (req, res) => {
    try {
        const validObj = validateUpdateCategory(req.body);
        const product = await Product.findByIdAndUpdate(validObj._id, {
            ...validObj,
        });
        if (!product) {
            return res.status(400).json("Product not found");
        }
        return res.status(200).json(product);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
        return res.status(400).json(err);
    }
};
export const addDeals = async (req, res) => {
    // try {
    //   const body = validateDeal(req.body);
    //   if (!body) {
    //     return res.sendStatus(400);
    //   }
    //   const newDeal= await new Deal({ ...body }).save();
    //   if (!newDeal) {
    //     return res.sendStatus(500);
    //   }
    //   return res.status(200).json(newDeal);
    // } catch (err) {
    //   if (err instanceof Error) {
    //     return res.status(400).json(err.message);
    //   }
    //   return res.status(400).json(err);
    // }
};
export const updateDeals = async (req, res) => {
    console.log("updateDeals");
};
export const deleteDeals = async (req, res) => {
    console.log("deleteDeals");
};
