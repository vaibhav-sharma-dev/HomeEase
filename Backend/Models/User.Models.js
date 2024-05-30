import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 8,
        },

        description: {
            type: String,
            minlength: 30,
        },

        profileImage: {
            
        },
    },

    {timestamps: true}
);

const User = mongoose.model("User", userSchema);


export default User;