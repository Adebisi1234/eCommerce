import { type Request, type Response } from "express";
import { Order } from "../models/Order.js";
import {
  validateOrder,
  validateShipping,
  validateTransaction,
} from "../utils/validation.js";
import { User } from "../models/User.js";
import { Product } from "../models/Product.js";
import { Shipping } from "../models/Shipping.js";

export const getOrders = async (req: Request, res: Response) => {
  const { id, page } = req.params;
  try {
    const orders = await Order.find({ userId: id })
      .populate("productId")
      .skip(page && !isNaN(+page) ? +page : 0)
      .limit(20)
      .sort("asc");
    if (!orders) {
      res.status(400).json("No orders");
    }
    res.status(200).json(orders);
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
    await User.findByIdAndUpdate(details.userId, {
      $push: { order: newOrder._id },
    });
    if (!newOrder) {
      res.status(400).json("order not created");
    }
    return res.status(200).json("order created");
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
      return res.status(400).json("No shippings found");
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
