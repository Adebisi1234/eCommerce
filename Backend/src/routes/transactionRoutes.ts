import { Router } from "express";
import {
  cancelOrder,
  getOrders,
  getShippings,
  orderProduct,
  purchaseProduct,
  shipProduct,
} from "../controllers/transactionController.js";
const transactionRouter = Router();
transactionRouter.post("/order", orderProduct);
transactionRouter.patch("/order/cancel/:id", cancelOrder);
transactionRouter.get("/order/:id/:page", getOrders);
transactionRouter.post("/payment", purchaseProduct);
transactionRouter.get("/shipping", getShippings);
transactionRouter.post("/shipping", shipProduct);
export default transactionRouter;
