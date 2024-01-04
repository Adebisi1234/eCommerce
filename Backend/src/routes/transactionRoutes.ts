import { Router } from "express";
import {
  cancelOrder,
  getOrders,
  getShippings,
  orderProduct,
  purchaseProduct,
  shipProduct,
  unSubscribe,
} from "../controllers/transactionController.js";
const transactionRouter = Router();
transactionRouter.post("/order", orderProduct);
transactionRouter.patch("/order/cancel/:id", cancelOrder);
transactionRouter.get("/order/:id/:page", getOrders);
transactionRouter.post("/payment", purchaseProduct);
transactionRouter.get("/shipping", getShippings);
transactionRouter.post("/shipping", shipProduct);
transactionRouter.post("/unsubscribe/:workflowId", unSubscribe);

export default transactionRouter;
