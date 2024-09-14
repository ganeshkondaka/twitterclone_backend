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
exports.posttweet = exports.alltweets = void 0;
const app_1 = require("../app");
const alltweets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tweets = yield app_1.prisma.tweet.findMany();
        return res.status(200).json({
            data: tweets
        });
    }
    catch (error) {
        console.log("error is :", error);
        return res.status(500).json({
            msg: "internal server error in tweetpage_controller gett error"
        });
    }
});
exports.alltweets = alltweets;
const posttweet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.username || !req.body.tweet) {
            return res.status(400).json({
                msg: "enter all the data",
            });
        }
        const newtweet = {
            username: req.body.username,
            tweet: req.body.tweet
        };
        const tweetdata = yield app_1.prisma.tweet.create({
            data: newtweet
        });
        return res.status(200).json({
            data: tweetdata
        });
    }
    catch (error) {
        console.log("error is :", error);
        return res.status(500).json({
            msg: "internal server error in tweetpage_controller posttweet error", error
        });
    }
});
exports.posttweet = posttweet;
