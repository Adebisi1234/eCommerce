import { User } from "../models/User.js";
import { validateAuth } from "../utils/validation.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { sendOTP } from "../utils/OTP.js";
export const signup = async (req, res) => {
    try {
        const { email, password, name } = validateAuth(req.body);
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ email, password: hashedPassword, name });
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch (err) {
        let error = err;
        res.status(400).json(error.message);
    }
};
export const login = async (req, res) => {
    console.log("login");
    try {
        const bearer = process.env.SENDCHAMP_BEARER;
        if (!bearer)
            return res.sendStatus(500);
        const { email, password, name } = validateAuth(req.body);
        const user = await User.findOne({ email }).select("password");
        if (!user)
            return res.status(400).json("user not found");
        const compare = await comparePassword(password, user.password);
        if (!compare)
            return res.status(400).json("Incorrect input");
        const result = await sendOTP(email, name, bearer);
        res.status(200).json(result);
    }
    catch (err) {
        let error = err;
        res.status(400).json(error.message);
    }
};
export const verify = async (req, res) => {
    console.log("verify");
};
export const getProfile = async (req, res) => {
    console.log("getProfile");
};
export const createProfile = async (req, res) => {
    console.log("createProfile");
};
export const updateProfile = async (req, res) => {
    console.log("updateProfile");
};
export const getCart = async (req, res) => {
    console.log("getCart");
};
export const addToCart = async (req, res) => {
    console.log("addToCart");
};
export const addPaymentDetails = async (req, res) => {
    console.log("addPaymentDetails");
};
export const updatePaymentDetails = async (req, res) => {
    console.log("updatePaymentDetails");
};
export const getPaymentDetails = async (req, res) => {
    console.log("getPaymentDetails");
};
export const updateCartItem = async (req, res) => {
    console.log("updateCartItem");
};
export const clearCart = async (req, res) => {
    console.log("clearCart");
};
export const deleteAccount = async (req, res) => {
    console.log("deleteAccount");
};
