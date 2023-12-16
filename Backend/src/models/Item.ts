import { model, Schema } from "mongoose";
const itemSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    name: String,
    desc: String,
    category_id: Schema.Types.ObjectId,
    image_url: String,
    price: Number,
    availability: Boolean,
    seller_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    deal_id: Schema.Types.ObjectId,
    stock_unit: Number,
  },
  { timestamps: true }
);

export const Item = model("Item", itemSchema);
