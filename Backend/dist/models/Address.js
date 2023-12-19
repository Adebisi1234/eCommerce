import mongoose, { Schema } from "mongoose";
const addressSchema = new Schema({
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
}, { timestamps: true });
export const Address = mongoose.model("Address", addressSchema);
