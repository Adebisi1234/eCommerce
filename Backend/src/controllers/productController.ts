import { type Request, type Response } from "express";
import {
  validateCategory,
  validateProduct,
  validateUpdateCategory,
  validateUpdateProduct,
} from "../utils/validation.js";
import { Product } from "../models/Product.js";
import { Category } from "../models/Category.js";
import { getOrSetCache } from "../cache/redis.js";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { limit, skip } = req.query;

    const cb = async () => {
      return await Product.find()
        .skip(skip && !isNaN(+skip) ? +skip : 0)
        .limit(limit && !isNaN(+limit) ? +limit : 0);
    };

    const products = await (getOrSetCache(
      `allProducts/limit=${limit}`,
      cb
    ) as ReturnType<typeof cb>);
    if (!products) {
      return res.status(500).json("No product found");
    }
    return res.status(200).json(products);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const cb = async () => await Product.findById(id);
    const product = await (getOrSetCache(id, cb) as ReturnType<typeof cb>);
    if (!product) {
      return res.status(400).json("product not found");
    }
    return res.status(200).json(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const addProduct = async (req: Request, res: Response) => {
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
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validObj = validateUpdateProduct(req.body);
    const product = await Product.findByIdAndUpdate(id, {
      ...validObj,
    });
    if (!product) {
      return res.status(400).json("Product not found");
    }
    return res.status(200).json(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    return res.sendStatus(201);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const getCategoryProducts = async (req: Request, res: Response) => {
  try {
    const { limit, skip } = req.query;
    const { name } = req.params;

    const cb = async () => {
      return await Product.find({ category: name })
        .skip(skip && !isNaN(+skip) ? +skip : 0)
        .limit(limit && !isNaN(+limit) ? +limit : 0);
    };
    const products = await (getOrSetCache(name, cb) as ReturnType<typeof cb>);
    if (!products) {
      return res.status(400).json("products not found");
    }
    return res.status(200).json(products);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const cb = async () => await Category.find();
    const categories = await (getOrSetCache("categories", cb) as ReturnType<
      typeof cb
    >);
    if (!categories) {
      return res.status(500).json("No Category found");
    }
    return res.status(200).json(categories);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const addCategory = async (req: Request, res: Response) => {
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
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const validObj = validateUpdateCategory(req.body);
    const product = await Category.findOneAndUpdate(
      { name },
      {
        ...validObj,
      }
    );
    if (!product) {
      return res.status(400).json("Product not found");
    }
    return res.status(200).json(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const addDeals = async (req: Request, res: Response) => {};
export const updateDeals = async (req: Request, res: Response) => {
  console.log("updateDeals");
};
export const deleteDeals = async (req: Request, res: Response) => {
  console.log("deleteDeals");
};
