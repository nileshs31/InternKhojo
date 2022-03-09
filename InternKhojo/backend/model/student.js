import mongoose from "mongoose";

const StudentSchema=new mongoose.Schema({
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

const StudentModel=mongoose.model("student",StudentSchema);
export default StudentModel;