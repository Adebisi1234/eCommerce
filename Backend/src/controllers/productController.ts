import { type Request, type Response } from "express";
import { validateProduct } from "../utils/validation.js";
import { Product } from "../models/Product.js";

export const getAllProducts = async (req: Request, res: Response) => {
  console.log(getAllProducts);
};
export const getProduct = async (req: Request, res: Response) => {
  console.log("getProduct");
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
      return res.status(500).json(err.message);
    }
    if (typeof err === "string") {
      return res.status(500).json(err);
    }
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  console.log("updateProduct");
};
export const deleteProduct = async (req: Request, res: Response) => {
  console.log("deleteProduct");
};
export const getCategory = async (req: Request, res: Response) => {
  console.log("getCategory");
};
export const getAllCategories = async (req: Request, res: Response) => {
  console.log("getAllCategories");
};
export const addCategory = async (req: Request, res: Response) => {
  console.log("addCategory");
};
export const updateCategory = async (req: Request, res: Response) => {
  console.log("updateCategory");
};

export const addDeals = async (req: Request, res: Response) => {
  console.log("addDeals");
};
export const updateDeals = async (req: Request, res: Response) => {
  console.log("updateDeals");
};
export const deleteDeals = async (req: Request, res: Response) => {
  console.log("deleteDeals");
};
