import express from "express";
import { studentReg,studentLogin } from "../controller/studentFun.js";
import { recruiterReg,recruiterLogin } from "../controller/recruiterFun.js";

const route=express.Router();

route.post("/studentreg",studentReg);
route.post("/studentlogin",studentLogin);
route.post("/recruiterreg",recruiterReg);
route.post("/recruiterlogin",recruiterLogin);


export default route;