"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", (req, res) => {
    res.json("Welcome to the App");
});
exports.userRouter.get("/getUser", user_controller_1.getUser);
exports.userRouter.post("/createUser", user_controller_1.createUser);
exports.userRouter.patch("/updateUser/:id", user_controller_1.updateUser);
exports.userRouter.delete("/deleteUser/:id", user_controller_1.deleteUser);
