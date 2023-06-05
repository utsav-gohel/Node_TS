"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = void 0;
const userModel = require("../model/user.model");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield userModel.find();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (Object.keys(req.body).length == 0) {
            return res.json('"Please Provide Data"');
        }
        const data = yield userModel.create(req.body);
        res.status(200).json({
            msg: "User Created",
            data,
        });
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const userId = yield userModel.findById(id);
        console.log(userId);
        if (!userId) {
            return res.status(404).json("Invalid UserId");
        }
        console.log("hey");
        const data = yield userModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            msg: "User Updated",
            data,
        });
        console.log("hey2");
    }
    catch (err) {
        console.log("hey3");
        res.status(404).json(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        let userId = yield userModel.findById(id);
        if (!userId) {
            return res.status(404).json("Invalid UserId");
        }
        const data = yield userModel.findByIdAndDelete(id);
        res.status(200).json({
            msg: "User Deleted",
            data,
        });
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.deleteUser = deleteUser;
