import mongoose, { Schema } from "mongoose";
const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    itemIds: [
        {
            type: Schema.Types.ObjectId,
        },
    ],
}, { timestamps: true });
export const Cart = mongoose.model("Cart", CartSchema);