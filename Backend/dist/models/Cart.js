import { model, Schema } from "mongoose";
const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    itemIds: [
        {
            type: Schema.Types.ObjectId,
            ref: "CartItem",
        },
    ],
    total: { type: Number, default: 0 },
}, { timestamps: true });
export const Cart = model("Cart", CartSchema);
