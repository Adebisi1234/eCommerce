import { Schema, model } from "mongoose";
const OrderSchema = new Schema({
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
    amount: Number,
}, { timestamps: true });
export const Order = model("Order", OrderSchema);
