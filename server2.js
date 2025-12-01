const express = require('express');
const app = express();

// middlewear to parse json or url encoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//get route
app.get('/user',(req,res)=>{
    //example query params: /user?name=dolly
    const name = req.query.name||'Guest';
    res.send(`hello ${name},welcome to the get route`);
});
//post route
app.post('/user',(req,res)=>{
    const {name,email,password} =req.body;
    if(!name || !email || !password){
        return res.status(400).send(`All fields are required`)
    }
    res.send(`user registered succesfully
        Name: ${name}
        Email: ${email}`);
});
app.listen(3000,()=>{
    console.log('server running at successfully');
});