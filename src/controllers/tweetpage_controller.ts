import { prisma } from "../app";
import { Request, Response } from "express";

export const alltweets = async (req: Request, res: Response) => {
    try {
        const tweets = await prisma.tweet.findMany();
        return res.status(200).json({
            data: tweets
        })
    } catch (error) {
        console.log("error is :", error)
        return res.status(500).json({
            msg: "internal server error in tweetpage_controller gett error"
        })
    }
}

export const posttweet = async (req: Request, res: Response) => {
    try {
        if (!req.body.username || !req.body.tweet) {
            return res.status(400).json({
                msg: "enter all the data",
            })
        }
        const newtweet = {
            username: req.body.username,
            tweet: req.body.tweet

        }
        const tweetdata =await prisma.tweet.create({
            data: newtweet
        })
        return res.status(200).json({
            data: tweetdata
        })

    } catch (error) {
        console.log("error is :", error)
        return res.status(500).json({
            msg: "internal server error in tweetpage_controller posttweet error",error
        })

    }
}
