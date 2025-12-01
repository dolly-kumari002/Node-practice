// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.end('welcome to express.js dolly');
// });
// app.listen(3000,()=>{
//     console.log('server started running')
// });


// in get method we use to show data with the URLit is visible in
// the browser address bar use to retrieve data from server
const express = require('express');
const app = express();
// use middle wear to handle json optional for post
app.use(express.json());
app.get('/user',(req,res)=>{
    const name = req.query.name;
    const age = req.query.age;
    res.send(`hello ${name}, you are ${age} years old.`);
});
app.listen(3000,()=>{
    console.log('server running successfully');
});