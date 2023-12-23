import { type Request, type Response } from "express";
import { User } from "../models/User.js";
import {
  validateAddress,
  validateAuth,
  validateCartItem,
  validatePayment,
  validateUser,
  validateVerify,
} from "../utils/validation.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { sendOTP, verifyOTP } from "../utils/OTP.js";
import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";
import { CartItem } from "../models/CartItem.js";
import { Address } from "../models/Address.js";
import { Order } from "../models/Order.js";
import { Payment } from "../models/Payment.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const { phone, password, name } = validateAuth(req.body);
    const userExist = await User.findOne({ phone });
    if (userExist) {
      return res.status(400).json("User exists");
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ phone, password: hashedPassword, name });
    await newUser.save();
    const status = await sendOTP(phone);
    if (!status || status !== "pending") {
      return res.status(500).json("OTP was not created");
    }
    return res.status(200).json("OTP created");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { phone, password } = validateAuth(req.body);
    const user = await User.findOne({ phone }).select("password");
    if (!user) return res.status(400).json("user not found");
    const compare = await comparePassword(password, user.password);
    if (!compare) return res.status(400).json("Incorrect input");
    const status = await sendOTP(phone);
    if (!status || status !== "pending") {
      return res.status(500).json("OTP was not created");
    }
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const verify = async (req: Request, res: Response) => {
  try {
    const { phone, code } = validateVerify(req.body);
    const user = await User.findOne({ phone });
    if (!user) return res.status(400).json("user not found");
    const status = await verifyOTP(phone, code);
    if (!status || status !== "approved") {
      return res.status(400).json("OTP verification failed");
    }
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).populate(["cart", "order", "address"]);
    console.log(user);
    if (!user) {
      return res.status(400).json("User not found");
    }
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const createProfile = async (req: Request, res: Response) => {
  try {
    const body = validateAddress(req.body.address);
    if (!body) {
      return res.sendStatus(400);
    }
    await new Address({ ...body }).save();
  } catch (err) {
    return res.sendStatus(400);
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userObj = validateUser(req.body);
    const user = await User.findOneAndUpdate(
      { phone: userObj.phone },
      { ...userObj }
    );
    if (!user) {
      return res.status(400).json("user not found");
    }
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.sendStatus(400);
    }
    const cart =
      (await Cart.findOne({ userId })) ??
      (await new Cart({
        userId,
      }).save());
    await User.findOneAndUpdate({ _id: userId }, { cart: cart._id });
    return res.status(200).json(cart);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const addToCart = async (req: Request, res: Response) => {
  try {
    const body = validateCartItem(req.body);
    const product = await Product.findById(body.itemId);
    if (!product) {
      return res.sendStatus(400);
    }

    const cartItem =
      (await CartItem.findOne({ cartId: body.cartId, itemId: body.itemId })) ??
      (await new CartItem({ cartId: body.cartId, itemId: product._id }).save());

    if (!cartItem) {
      return res.sendStatus(400);
    }

    const cart = await Cart.findById(cartItem.cartId).populate("itemIds");

    if (!cart) {
      return res.status(400).json("Cart not found");
    }
    // If cart already contain it don't check it in product else check
    const itemIndex = cart.itemIds.findIndex((item) => {
      return item._id.equals(cartItem._id);
    });
    if (itemIndex !== -1) {
      cartItem.itemQty += 1;
      await cartItem.save();
      await cart.save();
      return res.status(200).json(cart);
    }

    cart.itemIds.push(cartItem._id);
    await cart.save();
    return res.status(200).json(cart);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const addPaymentDetails = async (req: Request, res: Response) => {
  try {
    const details = validatePayment(req.body);
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json("User not found");
    }
    const paymentDetails = await new Payment({
      ...details,
    }).save();
    user.payment = paymentDetails._id;
    user.save();
    return res.status(200).json("payment details added successfully");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const updatePaymentDetails = async (req: Request, res: Response) => {
  try {
    const details = validatePayment(req.body);
    const { id } = req.params;

    const payment = await Payment.findByIdAndUpdate(id, { ...details });
    if (!payment) {
      return res.status(400).json("payment details not updated");
    }
    return res.status(200).json("Payment updated");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const getPaymentDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const details = await Payment.findById(id);
    if (!details) {
      return res.status(400).json("payment details not found");
    }
    return res.status(200).json(details);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const update = validateCartItem(req.body);
    const updatedCartItem = await CartItem.findByIdAndUpdate(id, { ...update });
    return res.status(200).json(updatedCartItem);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const deleteCartItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await CartItem.findByIdAndDelete(id);
    return res.status(200).json("deleted cartItem");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const clearCart = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findById(id);
    if (!cart) {
      return res.status(400).json("Cart not found");
    }
    cart.itemIds.forEach(async (id) => {
      await CartItem.findByIdAndDelete(id);
    });
    cart.itemIds = [];
    await cart.save();
    return res.status(200).json("Cart cleared");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).populate(["cart", "order", "address"]);
    if (!user) {
      return res.status(400).json("User not found");
    }
    if (user.cart) {
      await Cart.findByIdAndDelete(user.cart._id);
    }
    if (user.order) {
      await Order.findByIdAndDelete(user.order._id);
    }
    if (user.address) {
      await Address.findByIdAndDelete(user.address._id);
    }
    user.deleteOne();
    return res.status(200).json("Account deleted");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
