import { Schema, model, Document } from "mongoose";
import { OrderDoc } from "./Order.js";
import { UserDoc } from "./User.js";
import { AddressDoc } from "./Address.js";

export type ShippingDoc = {
  orderId: Schema.Types.ObjectId | OrderDoc;
  customerId: Schema.Types.ObjectId | UserDoc;
  sellerId: Schema.Types.ObjectId | UserDoc;
  status: string;
  address: Schema.Types.ObjectId | AddressDoc;
};

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
