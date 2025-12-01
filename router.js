import express from "express"
import studentRouter from "./studentRoute.js"
const app = express();
app.use("/students",studentRouter);
app.listen(3000,()=>{
    console.log("server started");
});