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
const app = express();
app.use(cors());
// log requests
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
// body parser
app.use(express.json({
    limit: "10mb",
}));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookies());
// 3) ROUTES
app.use("/user", userRouter);
app.use("/transaction", transactionRouter);
app.use("/", productRoutes);
app.all("/*", (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
});
export default app;
