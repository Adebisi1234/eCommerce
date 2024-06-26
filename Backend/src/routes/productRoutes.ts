import { Router } from "express";
import {
  addCategory,
  addDeals,
  addProduct,
  deleteDeals,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateCategory,
  updateDeals,
  updateProduct,
  getAllCategories,
  getCategoryProducts,
} from "../controllers/productController.js";
import { verifyToken } from "../utils/jwt.js";

const productRoutes = Router();
productRoutes.get("/category/", getAllCategories);
productRoutes.get("/category/:name", getCategoryProducts);
productRoutes.get("/:id", getProduct);
productRoutes.get("/", getAllProducts);
productRoutes.use(verifyToken);
productRoutes.post("/category/", addCategory);
productRoutes.put("/category/:name", updateCategory);
productRoutes.post("/deals", addDeals);
productRoutes.put("/deals", updateDeals);
productRoutes.delete("/deals", deleteDeals);
productRoutes.post("/", addProduct);
productRoutes.put("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
