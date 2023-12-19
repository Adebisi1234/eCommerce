import { model, Schema } from "mongoose";

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
