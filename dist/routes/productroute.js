"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const p_router = express_1.default.Router();
p_router.get('/homepage', (req, res) => {
    res.json({
        msg: "homepage",
    });
});
p_router.get('/alltweets');
p_router.get('/usertweets/:id');
p_router.post('/posttweet');
p_router.put('/edit/:id');
p_router.delete('/edit/:id');
exports.default = p_router;
