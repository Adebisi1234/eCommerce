import { Router } from "express";
const userRouter = Router();

userRouter.post("/signin");
userRouter.post("/login");
userRouter.post("/verify");
userRouter.post("/profile");
userRouter.put("/profile");
userRouter.get("/profile");
userRouter.get("/cart");
userRouter.get("/account");
userRouter.post("/cart");
userRouter.post("/account");
userRouter.put("/cart");
userRouter.put("/account");

export default userRouter;
