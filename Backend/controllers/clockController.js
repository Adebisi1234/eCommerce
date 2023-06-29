import Clock from "../models/clockModel.js";
import { Worker } from "worker_threads";

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
    const name = req.params.name;
    const clock = await Clock.findOne({ name });
    return res.status(200).json({
      status: "success",
      message: clock,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const search = async (req, res, next) => {
  try {
    const name = req.params.name;
    const nameQuery = await Clock.find({
      name: { $regex: name, $options: "i" },
    });
    const cateQuery = await Clock.find({
      category: { $regex: name, $options: "i" },
    });
    return res.status(200).json({
      status: "success",
      message: [...nameQuery, ...cateQuery],
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

const smallImgUrl = async (req, res, next) => {
  try {
    const worker = new Worker("./worker.js", { workerData: req.body.imgUrl });
    worker.on("message", (data) => {
      req, (body.smallImgUrl = data);
      next();
    });
  } catch (error) {
    throw error;
  }
};

export default {
  getAllProducts,
  getProduct,
  newProduct,
  updateProduct,
  sendEmailOnOrder,
  search,
};
