import { Schema, model } from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

export const User = model("User", UserSchema);
