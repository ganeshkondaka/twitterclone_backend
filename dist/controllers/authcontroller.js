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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const app_1 = require("../app");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const existed_user = yield app_1.prisma.user.findUnique({
            where: {
                email,
            }
        });
        if (existed_user) {
            return res.json({
                msg: "user already existed"
            });
        }
        const user = yield app_1.prisma.user.create({
            data: {
                username,
                email,
                password
            }
        });
        console.log("user created");
        res.json({
            msg: "user created",
            data: user
        });
    }
    catch (error) {
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield app_1.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return res.status(404).json({
                msg: "user not found"
            });
        }
        const ispasswordvalid = (user.password === password);
        if (!ispasswordvalid) {
            return res.status(404).json({ msg: "invalid password" });
        }
        const jwttoken = jsonwebtoken_1.default.sign({ userid: user.id, email: email }, SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({
            msg: "token created",
            jwttoken,
            email
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "internal server"
        });
    }
});
exports.login = login;
