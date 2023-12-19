import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    phone: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
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

export const User = mongoose.model("User", UserSchema);
