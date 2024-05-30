import mongoose from "mongoose";


const dbConnect = async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI)
            .then(() => console.log("Connected to HomeEase Database!"))
    }

    catch (error) {
        console.log("Unable to connect to HomeEase Database", error);
        process.exit(1);
    }
}


export default dbConnect;