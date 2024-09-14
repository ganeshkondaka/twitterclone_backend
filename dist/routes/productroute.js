"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prodtokenchecker_1 = require("../middlewares/prodtokenchecker");
const tweetpage_controller_1 = require("../controllers/tweetpage_controller");
const p_router = express_1.default.Router();
p_router.get('/alltweets', prodtokenchecker_1.isauthenticated, tweetpage_controller_1.alltweets);
p_router.post('/posttweet', prodtokenchecker_1.isauthenticated, tweetpage_controller_1.posttweet);
p_router.get('/usertweets/:id');
p_router.put('/edit/:id');
p_router.delete('/edit/:id');
exports.default = p_router;
