import { Schema, model } from "mongoose";

const ShippingSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: String,
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
    required: true,
  },
});

export const Shipping = model("Shipping", ShippingSchema);
