import jwt from "jsonwebtoken";
import { type Request, type Response } from "express";
import { User, UserDoc } from "../models/User.js";
import {
  validateAddress,
  validateAuth,
  validateCartItem,
  validateOTP,
  validatePayment,
  validateUser,
  validateVerify,
} from "../utils/validation.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";
import { CartItem, CartItemDoc } from "../models/CartItem.js";
import { Address, AddressDoc } from "../models/Address.js";
import { Order } from "../models/Order.js";
import { Payment, PaymentDoc } from "../models/Payment.js";
import { signToken } from "../utils/jwt.js";
import { sendOTP } from "../temporal/nodemailer.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const body = validateAuth(req.body);
    const userExist = await User.findOne({ email: body.email });
    if (userExist) {
      return res.status(400).json("User exists");
    }
    const hashedPassword = await hashPassword(body.password);
    const newUser = new User({
      ...body,
      password: hashedPassword,
      profilePic: `https://robohash.org/${body.email}`,
    });

    const otp = await sendOTP(body.email);
    newUser.otp = otp;
    await newUser.save();
    return res.json("OTP created");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = validateAuth(req.body);
    const user = await User.findOne({ email }).select("password");
    if (!user) return res.status(400).json("user not found");
    const compare = await comparePassword(password, user.password);
    if (!compare) return res.status(400).json("Incorrect input");
    const otp = await sendOTP(email);
    user.otp = otp;
    await user.save();
    return res.json("Otp created");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const refreshTokens = async (req: Request, res: Response) => {
  try {
    const refreshTokenCookie = req.cookies?.refreshToken;
    if (!refreshTokenCookie) {
      return res.status(403).json("refresh cookie not found");
    }

    const { id } = jwt.decode(refreshTokenCookie) as { id: any };

    if (!id) {
      return res.status(403).json("invalid credentials");
    }
    const user = await User.findById(id).select("refreshToken");
    if (!user) {
      return res.status(403).json("User not found");
    }
    if (refreshTokenCookie !== user?.refreshToken) {
      return res.status(401).json("Wrong credentials, please try logging in ");
    }
    const { accessToken, refreshToken } = signToken(id);
    user.refreshToken = refreshToken;
    res.cookie("refreshToken", refreshToken, {
      secure: process.env.NODE_ENV === "production" ? true : false,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });
    await user.save();
    return res.json({ token: accessToken });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(403).json(err.message);
    }
    return res.status(403).json(err);
  }
};

export const verify = async (req: Request, res: Response) => {
  try {
    const { email, code } = validateVerify(req.body);
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("user not found");
    if (user.otp != code) {
      console.log(user.otp, code);
      return res.status(400).json("Wrong credentials");
    }
    user.verified = true;
    user.otp = 0;
    const { accessToken, refreshToken } = signToken(user._id);
    user.refreshToken = refreshToken;
    user.save();
    res.cookie("refreshToken", refreshToken, {
      secure: process.env.NODE_ENV === "production" ? true : false,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });
    // There's definitely a better way to do this
    return res.json({
      ...user.toObject(),
      token: accessToken,
      refreshToken: null,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const refreshOTP = async (req: Request, res: Response) => {
  try {
    const body = validateOTP(req.body);
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(403).json("Wrong credentials");
    }

    user.otp = await sendOTP(body.email);

    await user.save();
    return res.json("Otp refreshed");
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

    if (!user) {
      return res.status(400).json("User not found");
    }

    return res.json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const createProfile = async (req: Request, res: Response) => {
  try {
    const body: AddressDoc = validateAddress(req.body.address);
    if (!body) {
      return res.sendStatus(400);
    }
    await new Address({ ...body }).save();
    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userObj: UserDoc = validateUser(req.body);
    const user = await User.findOneAndUpdate(
      { email: userObj.email },
      { ...userObj }
    );
    if (!user) {
      return res.status(400).json("user not found");
    }
    return res.json(user);
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
    await cart.populate({
      path: "itemIds",
      model: "CartItem",
      populate: { path: "itemId", model: "Product" },
    });

    return res.json(cart);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const addToCart = async (req: Request, res: Response) => {
  try {
    const body: CartItemDoc = validateCartItem(req.body);
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
    const itemIndex = cart.itemIds.findIndex((item) => {
      return item._id.equals(cartItem._id);
    });
    if (itemIndex !== -1) {
      return res.status(200).json(cart);
    }
    cart.itemIds.push(cartItem._id);
    await cart.save();
    return res.json(cart.toObject());
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};

export const addPaymentDetails = async (req: Request, res: Response) => {
  try {
    const details: PaymentDoc = validatePayment(req.body);
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
    return res.json("payment details added successfully");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
export const updatePaymentDetails = async (req: Request, res: Response) => {
  try {
    const details: PaymentDoc = validatePayment(req.body);
    const { id } = req.params;

    const payment = await Payment.findByIdAndUpdate(id, { ...details });
    if (!payment) {
      return res.status(400).json("payment details not updated");
    }
    return res.json("Payment updated");
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
    return res.json(details);
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

    const update: CartItemDoc = validateCartItem(req.body);
    const updatedCartItem = await CartItem.findByIdAndUpdate(id, {
      ...update,
    });
    return res.json(updatedCartItem);
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

    const item = await CartItem.findByIdAndDelete(id);
    if (!item.value) {
      return res.sendStatus(200);
    }
    await Cart.findByIdAndUpdate(item.value.cartId, { $pop: { itemIds: id } });
    return res.json("deleted cartItem");
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
    return res.json("Cart cleared");
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
      await CartItem.find({ cartId: user.cart._id }).deleteMany();
      await Cart.findByIdAndDelete(user.cart._id);
    }
    if (user.order) {
      await Order.find({ userId: user._id }).deleteMany();
    }
    if (user.address) {
      await Address.findByIdAndDelete(user.address._id);
    }
    user.deleteOne();
    return res.json("Account deleted");
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json(err.message);
    }
    return res.status(400).json(err);
  }
};
