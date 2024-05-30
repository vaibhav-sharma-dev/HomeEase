import express from "express";
import cors from "cors";
import passport from "passport";
import "./Middlewares/Passport.Middlewares.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());

import authRouter from "./Routes/Auth.Routes.js";

app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
});


export {app}