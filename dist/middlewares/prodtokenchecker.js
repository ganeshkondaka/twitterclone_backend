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
exports.isauthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isauthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = req.headers["authorization"];
    // console.log("auth is :",auth)
    if (!auth) {
        return res.status(403).json({
            msg: "unauherized, token in required"
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(auth, process.env.SECRET_KEY);
        console.log("decoded is :", decoded);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            msg: "Invalid or expired token",
        });
    }
});
exports.isauthenticated = isauthenticated;
