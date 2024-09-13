import express, { Express } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import a_router from "./routes/authroute";
import p_router from "./routes/productroute";

const prisma = new PrismaClient();

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000;

app.use("/api/auth", a_router)
app.use("/api/prod", p_router)

app.listen(port, () => { console.log(`app is running at port ${port}`) })
export { prisma }
