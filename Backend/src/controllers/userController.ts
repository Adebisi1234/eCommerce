import { type Request, type Response } from "express";
import { User } from "../models/User.js";
import { validateAuth, validateVerify } from "../utils/validation.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { sendOTP, verifyOTP } from "../utils/OTP.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const { phone, password, name } = validateAuth(req.body);
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ phone, password: hashedPassword, name });
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (err) {
    let error = err as { message: string };
    return res.sendStatus(400);
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
    return res.status(200).json("OTP created");
  } catch (err) {
    return res.status(400).json("OTP was not created");
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
    return res.status(400).json("OTP verification failed");
  }
};

export const getProfile = async (req: Request, res: Response) => {
  console.log("getProfile");
};
export const createProfile = async (req: Request, res: Response) => {
  console.log("createProfile");
};

export const updateProfile = async (req: Request, res: Response) => {
  console.log("updateProfile");
};

export const getCart = async (req: Request, res: Response) => {
  console.log("getCart");
};
export const addToCart = async (req: Request, res: Response) => {
  console.log("addToCart");
};

export const addPaymentDetails = async (req: Request, res: Response) => {
  console.log("addPaymentDetails");
};
export const updatePaymentDetails = async (req: Request, res: Response) => {
  console.log("updatePaymentDetails");
};
export const getPaymentDetails = async (req: Request, res: Response) => {
  console.log("getPaymentDetails");
};

export const updateCartItem = async (req: Request, res: Response) => {
  console.log("updateCartItem");
};

export const clearCart = async (req: Request, res: Response) => {
  console.log("clearCart");
};

export const deleteAccount = async (req: Request, res: Response) => {
  console.log("deleteAccount");
};
