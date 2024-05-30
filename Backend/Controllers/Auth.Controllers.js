import User from "../Models/User.Models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { APIError } from "../Utils/API_Error.Util.js";


export const SignUp = async (req, res) => {
    const {fullName, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({fullName, email, password: hashedPassword});

    try {
        await newUser.save();
        res.status(201).json("User Created!");
    }

    catch (error) {
        throw new APIError(500, "Something went wrong while signing in.")
    }
}


export const SignIn = async (req, res) => {
    const {email, password} = req.body;

    try {
        const validEmail = await User.findOne({email});
        if (!validEmail) 
            throw new APIError(400, "Email not found!");

        const validPassword = bcrypt.compareSync(password, validEmail.password);
        if (!validPassword) 
            throw new APIError(400, "Invalid Credentials!");

        const token = jwt.sign({id: validEmail._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

        res
            .status(201)
            .json({
                message: "Logged In Successfully!",
                token: "Bearer " + token,
            })
    }

    catch (error) {
        throw new APIError(500);
    }
}