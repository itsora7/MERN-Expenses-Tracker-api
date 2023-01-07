import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
const __dirname = path.resolve();
console.log(__dir);

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(morgan("dev")); // logs all the income req information
// app.use(helmet()); // setting default security headers to protect some attacks
// app.use(cors()); //allow cross origin resources
app.use(express.json()); // convert incoming data in the req

// MongoDB connect
import { connectDB } from "./src/config/dbConfig.js";
connectDB();
//router
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter);

app.use("*", (req, res) => {
  res.json({
    message: "You are in the wrong place, go back!",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
