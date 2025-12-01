import express from "express"

const router = express.Router();
router.get("/",(req,res)=>{
    res.send("all student request");
});
router.post("/",(req,res)=>{
    res.send("student added");
});
export default router;