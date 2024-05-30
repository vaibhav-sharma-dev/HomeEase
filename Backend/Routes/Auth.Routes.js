import express from "express";
import { SignUp, SignIn } from "../Controllers/Auth.Controllers.js";


const authRouter = express.Router();

authRouter.post("/sign-up", SignUp);
authRouter.post("/sign-in", SignIn);


export default authRouter;