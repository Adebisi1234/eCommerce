import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import cookies from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { verifyToken } from "./utils/jwt.js";

const app = express();
app.use(
  cors({
    origin: [
      "localhost:5173",
      "http://localhost:5173",
      "https://buysomething.vercel.app",
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "Origin"],
  })
);

// log requests

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// body parser
app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookies());

// 3) ROUTES
app.options("/login", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});
app.use("/user", userRouter);
app.use(verifyToken);
app.use("/transaction", transactionRouter);
app.use("/", productRoutes);
app.all("/*", (req, res, next) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

export default app;
