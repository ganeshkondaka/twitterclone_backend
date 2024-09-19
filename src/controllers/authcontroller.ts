import { prisma } from "../app";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.SECRET_KEY as string
export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const existed_user = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        if (existed_user) {
            return res.json({
                msg: "user already existed"
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
            data: user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "internal server error",
        })
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) {
            return res.status(404).json({
                msg: "user not found"
            })
        }
        const ispasswordvalid = (user.password === password);
        if (!ispasswordvalid) {
            return res.status(404).json(
                { msg: "invalid password" }
            )
        }
        const jwttoken = jwt.sign(
            { userid: user.id, email: email }, SECRET_KEY, { expiresIn: '24h' }
        )
        return res.status(200).json({
            msg: "token created",
            jwttoken,
            name:user.username,
            email,
            success:true
            
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "internal server"
        })

    }

}
