import { Router } from "express";
import {
  addPaymentDetails,
  addToCart,
  clearCart,
  createProfile,
  getCart,
  getPaymentDetails,
  getProfile,
  login,
  refreshTokens,
  signup,
  updateCartItem,
  updatePaymentDetails,
  updateProfile,
  verify,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/jwt.js";
const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/verify", verify);
userRouter.get("/refresh", refreshTokens);
userRouter.use(verifyToken);
userRouter.post("/profile", createProfile);
userRouter.put("/profile", updateProfile);
userRouter.get("/profile/:id", getProfile);
userRouter.get("/cart/:userId", getCart);
userRouter.get("/account", getPaymentDetails);
userRouter.post("/cart", addToCart);
userRouter.delete("/cart", clearCart);
userRouter.post("/account", addPaymentDetails);
userRouter.put("/cart", updateCartItem);
userRouter.put("/account", updatePaymentDetails);

export default userRouter;
