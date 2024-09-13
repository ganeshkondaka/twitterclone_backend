import { prisma } from "../app";
import { Request, Response } from "express";
import axios from "axios"

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const existed_user= await prisma.user.findUnique({
            where:{
                email,
            }
        })
        if (existed_user){
            return res.json({
                msg:"user already existed"
            })
        }
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password
            }
        })
        console.log("user created")
        res.json({
            msg: "user created",
            data:user
        })
    } catch (error) {

    }
}
// module.exports={signup}
