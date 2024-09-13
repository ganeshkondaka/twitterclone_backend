import express, { Router } from "express";
import { signup } from "../controllers/authcontroller";
const a_router = express.Router();

a_router.post("/signup",signup)
a_router.post("/login")

export default a_router;