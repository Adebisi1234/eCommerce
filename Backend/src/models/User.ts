import { Schema, model } from "mongoose";
import { AddressDoc } from "./Address.js";
import { CartDoc } from "./Cart.js";
import { OrderDoc } from "./Order.js";
import { PaymentDoc } from "./Payment.js";

export type UserDoc = {
  phone: number;
  email: string;
  password: string;
  userType: "Buyer" | "Seller";
  verified: boolean;
  address: Schema.Types.ObjectId | AddressDoc;
  cart: Schema.Types.ObjectId | CartDoc;
  order: Schema.Types.ObjectId | OrderDoc;
  payment: Schema.Types.ObjectId | PaymentDoc;
  name: string;
  profilePic?: string;
  refreshToken?: string;
};

const UserSchema = new Schema(
  {
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    profilePic: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    userType: {
      type: String,
      required: true,
      default: "Buyer",
    },
    name: {
      type: String,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
    order: {
      products: {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
      total: Number,
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: "payment",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", UserSchema);
