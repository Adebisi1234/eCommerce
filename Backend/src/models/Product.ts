import { model, Schema } from "mongoose";
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
