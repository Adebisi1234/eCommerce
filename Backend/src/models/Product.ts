import { UserDoc } from "./User.js";
import { model, Schema } from "mongoose";

export type ProductDoc = {
  _id: string;
  name: string;
  desc: string;
  category: string;
  rating: number;
  thumbnail: string;
  images: String[];
  price: number;
  discount: number;
  availability: boolean;
  sellerId: Schema.Types.ObjectId | UserDoc;
  dealId: Schema.Types.ObjectId;
  stockUnit: number;
};
const ProductSchema = new Schema(
  {
    name: String,
    desc: String,
    category: String,
    rating: Number,
    thumbnail: String,
    images: [String],
    price: Number,
    discount: Number,
    brand: String,
    availability: {
      type: Boolean,
      default: true,
    },
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
