const http = require("http");
const fs = require("fs");
const path = require("path")

function fibonacci(n){
    if(n<0) return null;
    if(n===0) return 0;
    if(n===1) return 1;
    let a = 0, b=1, temp  ;
    for(let i=2; i<=n; i++){
    temp = a+b;
    a = b;
    b = temp;
    }
    return b;
}
const server = http.createServer((req,res)=>{
    if(req.url=== "/"){
        const file = fs.readFileSync(path.join(__dirname,"index.html"));
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(file);
    }
    else if(req.url.startsWith("/fib")){
        const url = new URL(req.url ,`http://${req.headers.host}`);
        const num = parseInt(url.searchParams.get("number"));
        res.writeHead(200,{"Content-Type":"text/plain"});

        if(isNaN(num)||num<0){
            res.end("please enter a valid positive number");
            return;
        }
        const result = fibonacci(num);
        res.end(`The ${num} is the fibonacci number ${result}`);
    }
});
server.listen(3000 ,()=>{
    console.log("server posrt is running on http://localhost:3000");
});