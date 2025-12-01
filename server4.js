import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express();
app.use(express.urlencoded({extended:true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + "/public"));

function calculatemiddleware(req,res,next){
    let num = number(req.body.number);
    req.result = {
        increment: num+1,
        decrement: num-1,
        square: num*num,
    };
    next();
}
app.post("/calculate",calculatemiddleware,(req,res) => {
  const {increment,decrement,square} = req.result;
  res.send(`
    <h2>result</h2>
    <p>increment: ${increment}
    <p>decrement: ${decrement}
    <p>square: ${square}
    <br><a href="/">Go Back</a>
  `);
});
app.listen(3000, ()=>{
    console.log("server running at local host ");
})