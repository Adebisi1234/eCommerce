import { Router } from "express";

const productRoutes = Router();
productRoutes.get("/category/?:id");
productRoutes.post("/category/");
productRoutes.put("/category/?:id");
productRoutes.get("/?:id");
productRoutes.get("/");
productRoutes.post("/");
productRoutes.put("/:id");
productRoutes.delete("/:id");
productRoutes.post("/deals");
productRoutes.put("/deals");
productRoutes.delete("/deals");

export default productRoutes;
