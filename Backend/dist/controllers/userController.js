import { User } from "../models/User.js";
import { validateAddress, validateAuth, validateCartItem, validateUser, validateVerify, } from "../utils/validation.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { sendOTP, verifyOTP } from "../utils/OTP.js";
import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";
import { CartItem } from "../models/CartItem.js";
import { Address } from "../models/Address.js";
export const signup = async (req, res) => {
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
    }
    catch (err) {
        if (typeof err === "string") {
            return res.status(400).json(err);
        }
        else if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
    }
};
export const login = async (req, res) => {
    try {
        const { phone, password } = validateAuth(req.body);
        const user = await User.findOne({ phone }).select("password");
        if (!user)
            return res.status(400).json("user not found");
        const compare = await comparePassword(password, user.password);
        if (!compare)
            return res.status(400).json("Incorrect input");
        const status = await sendOTP(phone);
        if (!status || status !== "pending") {
            return res.status(500).json("OTP was not created");
        }
        return res.status(200).json(user);
    }
    catch (err) {
        if (typeof err === "string") {
            return res.status(400).json(err);
        }
        else if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
    }
};
export const verify = async (req, res) => {
    try {
        const { phone, code } = validateVerify(req.body);
        const user = await User.findOne({ phone });
        if (!user)
            return res.status(400).json("user not found");
        const status = await verifyOTP(phone, code);
        if (!status || status !== "approved") {
            return res.status(400).json("OTP verification failed");
        }
        return res.status(200).json(user);
    }
    catch (err) {
        if (typeof err === "string") {
            return res.status(400).json(err);
        }
        else if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
    }
};
export const getProfile = async (req, res) => {
    try {
        // change this to _id dumbass
        const { id } = req.params;
        if (!id) {
            return res.sendStatus(400);
        }
        const user = await User.findById(id).populate(["cart", "order", "address"]);
        console.log(user);
        if (!user) {
            return res.status(400).json("User not found");
        }
        return res.status(200).json(user);
    }
    catch (err) {
        if (typeof err === "string") {
            return res.status(400).json(err);
        }
        else if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
    }
};
export const createProfile = async (req, res) => {
    const body = validateAddress(req.body);
    await new Address({ ...body }).save();
    if (!body) {
        return res.sendStatus(400);
    }
};
export const updateProfile = async (req, res) => {
    try {
        const userObj = validateUser(req.body);
        const user = await User.findOneAndUpdate({ phone: userObj.phone }, { ...userObj });
        if (!user) {
            return res.status(400).json("user not found");
        }
        return res.status(200).json(user);
    }
    catch (err) {
        if (typeof err === "string") {
            return res.status(400).json(err);
        }
        else if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
    }
};
export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.sendStatus(400);
        }
        const cart = (await Cart.findOne({ userId })) ??
            (await new Cart({
                userId,
            }).save());
        await User.findOneAndUpdate({ _id: userId }, { cart: cart._id });
        return res.status(200).json(cart);
    }
    catch (err) {
        if (typeof err === "string") {
            return res.status(400).json(err);
        }
        else if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
    }
};
export const addToCart = async (req, res) => {
    try {
        const body = validateCartItem(req.body);
        const product = await Product.findById(body.itemId);
        if (!product) {
            return res.sendStatus(400);
        }
        const cartItem = (await CartItem.findOne({ cartId: body.cartId, itemId: body.itemId })) ??
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
    }
    catch (err) {
        if (typeof err === "string") {
            return res.status(400).json(err);
        }
        else if (err instanceof Error) {
            return res.status(400).json(err.message);
        }
    }
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
