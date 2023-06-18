import express from "express";
import authController from "../controllers/authController";
import userController from "../controllers/userController";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.use(authController.protect);
router.get("/session", authController.session);
router.put("/favorite", userController.editFavorite);
router.put("/cart", userController.editCart);
router.put("/purchased", userController.purchasedProduct);

export default router;
