import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });
require("./DbConfig");
import { userRouter } from "./routes/user.route";

const app = express();
app.use(express.json());
app.use(userRouter);

mongoose
  .connect(process.env.URI as string)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => console.log("app listen on 3000"));
