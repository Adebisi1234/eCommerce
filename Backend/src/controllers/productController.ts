import { type Request, type Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  console.log("getAllProducts");
};
export const getProduct = async (req: Request, res: Response) => {
  console.log("getProduct");
};
export const addProduct = async (req: Request, res: Response) => {
  console.log("addProduct");
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
