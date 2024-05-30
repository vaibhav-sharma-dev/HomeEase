import dotenv from "dotenv";
import dbConnect from "./DB/DB_Connect.js";
import { app } from "./app.js";


dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;

dbConnect()
    .then(() => {
        app.listen(port, () => console.log(`HomeEase Server is running on port ${port}!`));
    })