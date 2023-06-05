import express, { Request, Response } from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller";

export const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.json("Welcome to the App");
});

userRouter.get("/getUser", getUser);
userRouter.post("/createUser", createUser);
userRouter.patch("/updateUser/:id", updateUser);
userRouter.delete("/deleteUser/:id", deleteUser);
