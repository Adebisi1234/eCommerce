import { model, Schema } from "mongoose";
import { UserDoc } from "./User.js";
import { CartItemDoc } from "./CartItem.js";

export type CartDoc = {
  userId: Schema.Types.ObjectId | UserDoc;
  itemIds: (Schema.Types.ObjectId | CartItemDoc)[];
};

const CartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    itemIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "CartItem",
      },
    ],
    total: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Cart = model("Cart", CartSchema);
