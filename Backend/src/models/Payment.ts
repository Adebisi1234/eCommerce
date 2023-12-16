import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    bank_account: {
      type: Number,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
