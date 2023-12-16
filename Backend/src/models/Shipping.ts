import { Schema, model } from "mongoose";

const ShippingSchema = new Schema({
  _id: Schema.Types.ObjectId,
  order_id: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  customer_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  seller_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: String,
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
});

export const Shipping = model("Shipping", ShippingSchema);
