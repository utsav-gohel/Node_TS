"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "config.env" });
require("./DbConfig");
const user_route_1 = require("./routes/user.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(user_route_1.userRouter);
mongoose_1.default
    .connect(process.env.URI)
    .then(() => {
    console.log("DB Connected");
})
    .catch((e) => {
    console.log(e);
});
app.listen(3000, () => console.log("app listen on 3000"));
