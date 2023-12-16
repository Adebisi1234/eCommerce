import { Schema, model } from "mongoose";

const CartItemSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId },
    cart_id: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
    item_id: {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
    item_qty: { type: Number },
  },
  { timestamps: true }
);

export const CartItem = model("CartItem", CartItemSchema);
