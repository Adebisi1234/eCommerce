import { Schema, model } from "mongoose";
const CartItemSchema = new Schema({
    cartId: {
        type: Schema.Types.ObjectId,
        ref: "Cart",
    },
    itemId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    itemQty: { type: Number, default: 1 },
}, { timestamps: true });
export const CartItem = model("CartItem", CartItemSchema);
