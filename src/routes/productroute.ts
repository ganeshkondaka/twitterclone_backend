import express, { Router } from "express";
import { isauthenticated } from "../middlewares/prodtokenchecker";
import { alltweets, posttweet } from "../controllers/tweetpage_controller";

const p_router = express.Router()

p_router.get('/alltweets',isauthenticated,alltweets)
p_router.post('/posttweet',isauthenticated,posttweet)

p_router.get('/usertweets/:id')
p_router.put('/edit/:id')
p_router.delete('/edit/:id')

export default p_router;
