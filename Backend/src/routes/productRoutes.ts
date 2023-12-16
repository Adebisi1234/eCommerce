import { Router } from "express";

const productRoutes = Router();
productRoutes.get("/category/?:id");
productRoutes.post("/category/?:id");
productRoutes.put("/category/?:id");
productRoutes.get("/?:id");
productRoutes.post("/");
productRoutes.put("/:id");
productRoutes.delete("/:id");
productRoutes.post("/deals");
productRoutes.put("/deals");
productRoutes.delete("/deals");

export default productRoutes;
