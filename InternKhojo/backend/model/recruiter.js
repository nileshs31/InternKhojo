import mongoose from "mongoose";

const RecruiterSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Education:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

const RecruiterModel=mongoose.model("recruiter",RecruiterSchema);
export default RecruiterModel;