import { Schema, model, Document } from "mongoose";
import { CartDoc } from "./Cart.js";
import { ProductDoc } from "./Product.js";

export type CartItemDoc = {
  cartId: Schema.Types.ObjectId | CartDoc;
  itemId: Schema.Types.ObjectId | ProductDoc;
  itemQty: number;
};
const CartItemSchema = new Schema(
  {
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
    itemId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    itemQty: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const CartItem = model("CartItem", CartItemSchema);
