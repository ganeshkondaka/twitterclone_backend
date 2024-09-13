"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authcontroller_1 = require("../controllers/authcontroller");
const a_router = express_1.default.Router();
a_router.post("/signup", authcontroller_1.signup);
a_router.post("/login", authcontroller_1.login);
exports.default = a_router;
