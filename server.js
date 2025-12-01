const http = require('http');
const server = http.createServer((req,res)=>{
//SENT respond header for all files
//ROUTING 
if(req.url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("welcome to the home page");
}else if(req.url=== "/about"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("welcome to the about page");
}else if(req.url==="/contact"){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("welcome to the contact page");
}else{
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("404 page not found");
}
});
server.listen(3000,()=>{
    console.log("server is running on local host");
})

// req.url detect the page user requested
// fs.readfile() read the file content asynchronously
// res.end(dta) send html file content to browser
// res.writehead(200,{'content type': 'text/html}) sets response types as html