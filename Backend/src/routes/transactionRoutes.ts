import { Router } from "express";
const transactionRouter = Router();
transactionRouter.get("/order");
transactionRouter.post("/order");
transactionRouter.patch("/order/cancel/:id");
transactionRouter.post("/payment");
transactionRouter.get("/shipping");
transactionRouter.post("/shipping");
export default transactionRouter;
