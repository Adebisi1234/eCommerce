import { model, Schema } from "mongoose";
const paymentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    bankAccount: {
        type: Number,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
}, { timestamps: true });
export const Payment = model("Payment", paymentSchema);
