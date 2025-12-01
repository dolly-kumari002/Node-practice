const http = require("http");
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    // route home page
    if(url==="/" && method==="GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        return res.end("<h2>Home page</h2>");
    }

   // route about page
   if(url==="/about"&& method==="GET"){
    res.writeHead(200,{"Content-Type":"text/html"});
    return res.end("<h2>About page</h2>");
   }
   //contact from page(Get)
   if(url==="/contact" && method==="GET"){
    res.writeHead(200,{"Content-Type": "text/html"});
    return res.end(`
        <h2>Contact Form</h2>
        <form method ="POST" action="/contact">
        Name: <input type = "text" name = "name"/><br><br>
        <button type = "submit">Submit</button>
        </form>
    `)
   }
   //contact from submit("post")
   if(url=="/contact" && method==="POST"){
     let body = "";
     req.on("data",chunk=>(body+=chunk));
     req.on("end",()=>{
        const params = new URLSearchParams(body);
        const name = params.get("name");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(`<h3>Form submitted: ${name}</h3>`);
     });
     return;
   }
   res.writeHead(404,{"Content-Type":"text/html"});
   res.end("<h2>404 page not found</h2>");
})
server.listen(3000,()=>{
    console.log("server running");
})