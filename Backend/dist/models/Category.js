import { Schema, model } from "mongoose";
const CategorySchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    desc: {
        required: true,
        type: String,
    },
}, { timestamps: true });
export const Category = model("Category", CategorySchema);
