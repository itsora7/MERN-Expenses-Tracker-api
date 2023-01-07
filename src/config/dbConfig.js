import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const mongoURL = "mongodb://127.0.0.1:27017/MERN_Expenses_Tracker";
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(mongoURL);

    conn
      ? console.log("Mongo Connected")
      : console.log("Unable to connect Mongo");
  } catch (error) {
    console.log(error);
  }
};
