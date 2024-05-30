import express from "express";
import cors from "cors";
import passport from "passport";
import "./Middlewares/Passport.Middlewares.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());

import authRouter from "./Routes/Auth.Routes.js";

app.use("/api/v1/auth", authRouter);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
})


export {app}