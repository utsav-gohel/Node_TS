import { Request, Response } from "express";
const userModel = require("../model/user.model");

export const getUser = async (req: Request, res: Response) => {
  try {
    const data: object = await userModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};
export const createUser = async (req: Request, res: Response) => {
  try {
    if (Object.keys(req.body).length == 0) {
      return res.json('"Please Provide Data"');
    }
    const data: object = await userModel.create(req.body);
    res.status(200).json({
      msg: "User Created",
      data,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const userId: number = await userModel.findById(id);
    console.log(userId);

    if (!userId) {
      return res.status(404).json("Invalid UserId");
    }
    console.log("hey");

    const data: object = await userModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      msg: "User Updated",
      data,
    });
    console.log("hey2");
  } catch (err) {
    console.log("hey3");
    res.status(404).json(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    let userId: number = await userModel.findById(id);
    if (!userId) {
      return res.status(404).json("Invalid UserId");
    }

    const data: object = await userModel.findByIdAndDelete(id);
    res.status(200).json({
      msg: "User Deleted",
      data,
    });
  } catch (err) {
    res.status(404).json(err);
  }
};
