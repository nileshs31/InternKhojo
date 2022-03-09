import mongoose from "mongoose";

const connection=async()=>{
    try {
        const URL=process.env.db_url;
        await mongoose.connect(URL);
        console.log("database connected successfully");
    } catch (error) {
        console.log("error",error);
    }
}

export default connection;