import mongoose, { Schema } from "mongoose";

const CartSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    item_ids: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", CartSchema);
