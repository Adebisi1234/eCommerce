import express from "express";
import authController from "../controllers/authController.js";
import clockController from "../controllers/clockController.js";
import User from "../models/userModel.js";
const router = express.Router();

const isAdmin = async (req, res, next) => {
  const user = await User.findOne({ _id: req.body.id });
  console.log(user);

  if (!user || !user.isAdmin) {
    return res.status(401).json({
      status: "Failed",
      message: "Unauthorized not admin",
    });
  }
  next();
};

router.post("/success", clockController.sendEmailOnOrder);
router.get("/:name", clockController.getProduct);
router.get("/", clockController.getAllProducts);
router.use(authController.protect);
router.use(isAdmin);
router.post("/new", clockController.newProduct);
router.put("/:id", clockController.updateProduct);
export default router;
