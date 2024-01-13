import { type Request, type Response } from "express";
import { Order } from "../models/Order.js";
import {
  validateOrder,
  validateShipping,
  validateTransaction,
} from "../utils/validation.js";
import { User } from "../models/User.js";
import { Product, ProductDoc } from "../models/Product.js";
import { Shipping } from "../models/Shipping.js";
import { Connection, Client } from "@temporalio/client";
import {
  cancelPurchase,
  installmentQ,
  payInInstallments,
} from "../temporal/workflows.js";
import { ProductDetails, taskQueueName } from "../temporal/shared.js";

export const getOrders = async (req: Request, res: Response) => {
  const { id, page } = req.params;
  try {
    const orders = await Order.find({ userId: id })
      .populate("cartId")
      .skip(page && !isNaN(+page) ? +page : 0)
      .limit(20)
      .sort("asc");

    if (!orders) {
      res.json([]);
    }
    res.status(200).json(orders);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const getCurrentPaymentInstallment = async (
  req: Request,
  res: Response
) => {
  try {
    const { workflowId } = req.query as { workflowId: string };
    if (!workflowId) {
      return res.status(400).json("workflowId required");
    }
    const client = new Client();
    const workflow = client.workflow.getHandle(workflowId);
    const installment = await workflow.query(installmentQ);
    if (!installment) {
      return res.status(400).json("installment not found");
    }
    return res.json(installment);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const unSubscribe = async (req: Request, res: Response) => {
  try {
    const { workflowId } = req.query as { workflowId: string };
    if (!workflowId) {
      return res.status(400).json("workflowId required");
    }
    const client = new Client();
    const workflow = client.workflow.getHandle(workflowId);
    workflow.signal(cancelPurchase);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const orderProduct = async (req: Request, res: Response) => {
  try {
    const details = validateOrder(req.body);
    const newOrder = await new Order({
      ...details,
    }).save();

    const user = await User.findByIdAndUpdate(details.userId, {
      $push: { order: newOrder._id },
    });
    if (!user) {
      return res.status(400).json("user not found");
    }
    if (!newOrder) {
      return res.status(400).json("order not created");
    }
    const connection = await Connection.connect();
    const client = new Client({ connection });

    const productDetails: ProductDetails = {
      id: `${newOrder._id!}`,
      name: `${newOrder.cartId}`,
      price: `${newOrder.amount}`,
      userId: `${newOrder.userId}`,
    };
    const { workflowId } = await client.workflow.start(payInInstallments, {
      taskQueue: taskQueueName,
      workflowId: `${newOrder._id}`,
      args: [user.email!, productDetails, details.installments, details.sleep],
    });
    return res.status(200).json({ workflowId, orderId: newOrder._id! });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const cancelOrder = async (req: Request, res: Response) => {
  // validate if the order is already shipped or not
  try {
    await Order.findByIdAndDelete(req.params.id);
    const { workflowId } = req.query as { workflowId: string };
    if (!workflowId) {
      return res.status(400).json("workflowId required");
    }
    const client = new Client();
    const workflow = client.workflow.getHandle(workflowId);
    workflow.cancel();

    return res.status(200).json("deleted");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const getShippings = async (req: Request, res: Response) => {
  try {
    const { page } = req.params;
    const shippings = await Shipping.find()
      .skip(page && !isNaN(+page) ? +page : 0)
      .limit(20)
      .sort("asc");

    if (!shippings) {
      return res.json([]);
    }

    return res.status(200).json(shippings);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(200).json(err);
  }
};

export const shipProduct = async (req: Request, res: Response) => {
  try {
    const details = validateShipping(req.body);
    const shipping = await new Shipping({ ...details }).save();
    if (!shipping) {
      return res.status(400).json("Item not shipped");
    }
    return res.status(200).json("Item shipped");
    // Send a notification
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const purchaseProduct = async (req: Request, res: Response) => {
  try {
    const purchase = validateTransaction(req.body);
    await Product.findByIdAndUpdate(purchase.productId, {
      $inc: { stockUnit: -1 },
      $min: { stockUnit: 0 },
    });
    const order = await new Order({ ...purchase }).save();
    await User.findByIdAndUpdate(purchase.userId, {
      $push: { order: order._id },
    });
    res.status(200).json("order created");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
