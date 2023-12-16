import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user_type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
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
