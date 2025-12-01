const express = require('express'); //import express
const app = express();// create app
app.use(express.urlencoded({extended: true}));
app.use(express.json());// use middlewear to handle json data
const path = require('path');
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/register',(req,res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.send('all fields are required')
    }
    res.send(`user registerd successfully <br>Name : ${name} <br>Email: ${email}`);
});

app.listen(3000,()=>{
    console.log(`server running `);
});
