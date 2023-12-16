import { Router } from "express";
import {
  addPaymentDetails,
  addToCart,
  clearCart,
  getCart,
  getPaymentDetails,
  getProfile,
  login,
  signup,
  updateCartItem,
  updatePaymentDetails,
  updateProfile,
  verify,
} from "../controllers/userController.js";
const userRouter = Router();

userRouter.post("/signin", signup);
userRouter.post("/login", login);
userRouter.post("/verify", verify);
userRouter.post("/profile");
userRouter.put("/profile", updateProfile);
userRouter.get("/profile", getProfile);
userRouter.get("/cart", getCart);
userRouter.get("/account", getPaymentDetails);
userRouter.post("/cart", addToCart);
userRouter.delete("/cart", clearCart);
userRouter.post("/account", addPaymentDetails);
userRouter.put("/cart", updateCartItem);
userRouter.put("/account", updatePaymentDetails);

export default userRouter;
