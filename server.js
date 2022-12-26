import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = 8000;
//middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is ready at http://localhost:${PORT}`);
});
