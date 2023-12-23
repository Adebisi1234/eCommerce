import { model, Schema, Document } from "mongoose";
import { UserDoc } from "./User.js";

export type PaymentDoc = {
  userId: Schema.Types.ObjectId | UserDoc;
  bankAccount: number;
  payment: string;
};

const paymentSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

export const Payment = model("Payment", paymentSchema);
