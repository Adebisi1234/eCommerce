import { Schema, model } from "mongoose";

export type UserDoc = {
  phone: number;
  email: string;
  password: string;
  user_type: "Buyer" | "Seller";
  verified: boolean;
  name: string;
  profilePic?: string;
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
    order: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    payment: {
      type: Schema.Types.ObjectId,
      ref: "payment",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", UserSchema);
