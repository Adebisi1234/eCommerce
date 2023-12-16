import { Schema, model } from "mongoose";

const CategorySchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const Category = model("Category", CategorySchema);
