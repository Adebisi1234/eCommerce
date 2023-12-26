import { model, Schema } from "mongoose";
const ProductSchema = new Schema({
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
}, { timestamps: true });
export const Product = model("Product", ProductSchema);
