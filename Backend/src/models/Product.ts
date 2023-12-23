import { UserDoc } from "./User.js";
import { model, Schema } from "mongoose";

export type ProductDoc = {
  _id: string;
  name: string;
  desc: string;
  categoryId: Schema.Types.ObjectId;
  imageUrl: string;
  price: number;
  availability: boolean;
  sellerId: Schema.Types.ObjectId | UserDoc;
  dealId: Schema.Types.ObjectId;
  stockUnit: number;
};
const ProductSchema = new Schema(
  {
    name: String,
    desc: String,
    categoryId: Schema.Types.ObjectId,
    imageUrl: String,
    price: Number,
    availability: Boolean,
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    dealId: Schema.Types.ObjectId,
    stockUnit: Number,
  },
  { timestamps: true }
);

export const Product = model("Product", ProductSchema);
