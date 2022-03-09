import express from "express";
import dotenv from "dotenv";
import connection from "./DB/connection.js";
import route from "./router/internKhojo.js";

const port=process.env.PORT || 5000;

const app=express();
dotenv.config();

app.use(express.json());
app.use("/",route);

connection();

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})