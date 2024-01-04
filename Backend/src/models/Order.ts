import { Schema, model } from "mongoose";
import { UserDoc } from "./User.js";
import { ProductDoc } from "./Product.js";
import { CartDoc } from "./Cart.js";

export type OrderDoc = {
  userId: Schema.Types.ObjectId | UserDoc;
  carId: Schema.Types.ObjectId | CartDoc;
  status: string;
  amount: number;
};

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },

    status: String,
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);
