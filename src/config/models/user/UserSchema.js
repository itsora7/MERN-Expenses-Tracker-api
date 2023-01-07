import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    pin: {
      type: Number,
      required: true,
      min: 1000,
      max: 9999,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema); //users
