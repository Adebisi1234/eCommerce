import { model, Schema } from "mongoose";

const TransactionSchema = new Schema({
  _id: Schema.Types.ObjectId,
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  payment_method: String,
  status: String,
  payment_log: String,
});

export const Transaction = model("Transaction", TransactionSchema);
