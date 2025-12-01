const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/'){ // check if the user visited to the home page
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("welcome to the home pagee");
    }
    else if(req.url=='/about'){// respond to the about page  chaeck which path user is visiting
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("about page-hello dolly");
    }
    else if(req.url=='/contact'){ // respond to the contact page check ehic path user is visiting
        res.writeHead(200,{'content-type':'text/plain'});
        res.end("contact page reach us any time");
    }
    else{
        res.writeHead(404,{'content-Type': 'text/plain'});// send response data to the client 
        res.end("404 page not found") // end the response and send message to the browser
    }
}); 
server.listen(3000, ()=>{
    console.log("server running at local host");
});

