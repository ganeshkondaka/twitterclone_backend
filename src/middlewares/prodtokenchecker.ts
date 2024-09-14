import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

interface AuthenticatedRequest extends Request {
    user?: any; // You can replace `any` with a more specific type if needed
}

export const isauthenticated = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const auth = req.headers["authorization"]
    console.log("auth is :",auth)
    if (!auth) {
        return res.status(403).json({
            msg: "unauherized, token in required"
        })
    }

    console.log(process.env.SECRET_KEY)
    
    try {
        const decoded = jwt.verify(auth, process.env.SECRET_KEY as string)
        console.log("decoded is :",decoded)
        
        req.user = decoded
        next();
    } catch (error) {
        return res.status(401).json({
            msg: "Invalid or expired token",
        });

    }
}
