import Clock from "../models/clockModel.js";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API_KEY);

const getAllProducts = async (req, res, next) => {
  try {
    const clocks = await Clock.find();
    if (!clocks)
      return res.status(400).json({
        status: "error",
        message: "No product",
      });
    return res.status(200).json({
      status: "success",
      message: clocks,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const clock = await Clock.findOne({ _id: id });
    return res.status(200).json({
      status: "success",
      message: clock,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const newProduct = async (req, res, next) => {
  try {
    const { id, ...others } = req.body;
    const newClock = await Clock.create(others);
    return res.status(200).json({
      status: "success",
      message: newClock,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const clock = await Clock.findOne({ _id: id });
    Object.keys(req.body).forEach(async (x) => {
      clock[x] = req.body[x];
    });
    await clock.save();
    res.status(200).json({
      status: "success",
      message: clock,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const sendEmailOnOrder = async (req, res, next) => {
  try {
    const data = await resend.emails.send({
      from: "ti.adebisi@gmail.com",
      to: "oluwatobilobaadebisi6@gmail.com", //req.body.email,
      subject: "this is sht", //req.body.product.name,
      html: "<strong>It works!</strong>",
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default {
  getAllProducts,
  getProduct,
  newProduct,
  updateProduct,
  sendEmailOnOrder,
};
