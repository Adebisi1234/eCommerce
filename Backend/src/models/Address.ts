import { Schema, model } from "mongoose";
import { UserDoc } from "./User.js";

export type AddressDoc = {
  userId: Schema.Types.ObjectId | UserDoc;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postCode: string;
  country: string;
};

const addressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
    },
    postCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Address = model("Address", addressSchema);
