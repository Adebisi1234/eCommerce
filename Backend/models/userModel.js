import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    refreshToken: {
      type: String,
      select: false,
    },
    cart: {
      type: [String],
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    orders: {
      type: [Object],
    },
    deliveryOption: {
      type: String,
    },
    favorite: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  userPassword,
  correctPassword
) {
  return await bcrypt.compare(userPassword, correctPassword);
};

const User = mongoose.model("User", userSchema);

export default User;
