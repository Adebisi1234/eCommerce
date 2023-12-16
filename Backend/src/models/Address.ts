import mongoose, { Schema, SchemaType } from "mongoose";

const addressSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    address_line_1: {
      type: String,
      required: true,
    },
    address_line_2: {
      type: String,
    },
    city: {
      type: String,
    },
    post_code: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Address = mongoose.model("Address", addressSchema);
