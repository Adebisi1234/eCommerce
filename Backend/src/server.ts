import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";

const DB = process.env.DATABASE_URI!;
let i = 0;
if (process.env.NODE_ENV === "production") {
  mongoose.connect(DB).then(() => console.log("DB connected successfully!"));
} else {
  async function connect(db: string) {
    try {
      i++;
      await mongoose.connect(db);
      console.log("DB connected successfully!");
    } catch (err) {
      if (i > 10) {
        throw err;
      }
      setTimeout(() => {
        connect(db);
      }, 250 * i);
    }
  }

  connect(DB);
}

const port = process.env.PORT || 6001;

const server = app.listen(port, () => {
  console.log(`App started  on port ${port}...`);
});

process.on("unhandledRejection", (err: any) => {
  console.log("UNHANDLED REJECTION! => SHUTTING DOWN...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! => SHUTTING DOWN...");
  console.log(err.name, err.message);
  process.exit(1);
});
