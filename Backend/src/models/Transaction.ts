import { model, Schema, Document } from "mongoose";
import { OrderDoc } from "./Order.js";
import { UserDoc } from "./User.js";

export type TransactionDoc = {
  orderId: Schema.Types.ObjectId | OrderDoc;
  userId: Schema.Types.ObjectId | UserDoc;
};

const TransactionSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  paymentMethod: String,
  status: String,
  paymentLog: String,
});

export const Transaction = model("Transaction", TransactionSchema);
