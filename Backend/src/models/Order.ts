import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    cart_id: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
    status: String,
    amount: Number,
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);
