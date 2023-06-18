import { Schema, model } from "mongoose";

const clockModel = Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Name is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    priceWord: {
      type: String,
      required: [true, "PriceWord is required"],
    },
    category: {
      type: [String],
    },
    imgUrl: {
      type: String,
    },
    showcase: {
      type: [String],
    },
    smallImgUrl: {
      type: String,
    },
    available: {
      type: Boolean,
      default: true,
    },
    amount: {
      type: Number,
    },
    desc: {
      type: String,
    },
    discount: {
      type: Number,
    },
    numSold: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Clock = model("clock", clockModel);
export default Clock;
