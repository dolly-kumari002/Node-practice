// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("hello");
// })
// server.listen(3000,()=>{
//     console.log("server started");
// })

// 2️⃣ Task – Routing Home & About
// const http = require("http")
// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("welcome to home page");
//     }else if(req.url==="/about"){
//         res.end("This is about page");
//     }else {
//         res.end("404 page not found");
//     }
// });
// server.listen(3000);

// 3️⃣ Task – Send HTML Without External File
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end(`
//         <html>
//         <body>
//         <h2>html send using res.write()</h2>
//         <p>This is a simple html response</p>
//         </body>
//         </html>
//         `)
// });
// server.listen(3000);


// 4️⃣ Serve an External HTML File
// Task:
// Create an index.html file and serve it using:
// fs.readFile()
// Route: /home.
// const http = require("http")
// const fs = require("fs")
// const server = http.createServer((req,res)=>{
//     if(req.url==="/home"){
//         fs.readFile("index.html",(req,res)=>{
//             res.writeHead(200,{"Content-Type":"text/html"});
//             res.end(data);
//         })
//     }
// });
// server.listen(3000);


// 5️⃣ Task – POST Form Handling (Print Values)
// Task:
// Create a form with name and age fields.
// When user submits (POST), print entered values on web page using Node HTTP only.
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url==="/form" && req.method==="GET"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         return res.end(`
//             <form action="/form" method="POST">
//             Name: <input type="text" name="name"/><br><br>
//             Age: <input type="text" name="age"/><br><br>
//             <button>Submit</button>
//             </form>
//             `);
//     }
//     if(req.url==="/form" && req.method ==="POST"){
//         let body = "";
//         req.on("data",chunk => body+= chunk);
//         req.on("end",()=>{
//             const params = new URLSearchParams(body);
//             const name = params.get("name");
//             const age = params.get("age");

//             res.end(`you enter Name: ${name}, Age: ${age}`);
//         });
//     }
// });
// server.listen(3000);



// 6️⃣ Serve Multiple Files Based on Routes
// Task:
// Make:
// home.html
// contact.html
// services.html
// Use routing:
// /home → home.html
// /contact → contact.html
// /services → services.html

// const http = require("http");
// const fs = require("fs");
// const sendFile = (file,res)=>{
//     fs.readFile(file,(err,data)=>{
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end(data);
//     });
// };
// const server = http.createServer((req,res)=>{
//     if(req.url === "/home") return sendFile("home.html",res);
//     if(req.url=== "/contact") return sendFile("contact.html",res);
//     if(req.url=== "/about") return sendFile("about.html",res);
// })


// ✅ 7️⃣ Task – JSON API
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url==="/student"){
//         const data = {
//             id:2,
//             name:"dolly",
//             coures:"btech"
//         };
//         res.writeHead(200,{"Content-Type":"application/json"});
//         return res.end(JSON.stringify(data));
//     }
//     res.end("invalid route");
// });
// server.listen(300);


// ✅ 9️⃣ File Upload Simulation
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url==="/upload" && req.method ==="GET"){
//         res.end(`
//     <form method="POST" action="/upload" enctype="multipart/form-data">
//     Select File: <input type="text" name="filename" /><br><br>
//      <button>Upload</button>
//      </form>
//      `)
//     }
//     if(req.url ==="/upload" && req.method ==="POST"){
//        let body = "";
//        req.on("data", chunk=> body+=chunk);
//        req.on("end",()=>{
//         const params = new URLSearchParams(body);
//         const file = params.get("filename");
//         res.end(`you selected file: ${file}`);
//        })
//     }
// });
// server.listen(3000);

// // ✅ 🔟 Task – Login Form Validation
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url === "/login" && req.method === "GET"){
//         res.end(`
//             <form method = "POST" action = "/login">
//             username: <input type = "text" name = "pass" /><br><br>
//             password: <input type = "Password" name = "pass" /><br><br>
//             <button>login</button>
//       `)
//     }
//     if(req.url==="/login" && req.method ==="POST"){
//         let body = "";
//         res.on("data", chunk => body+=chunk);
//         req.on("end",()=>{
//             const params = new URLSearchParams(body);
//             const user = params.get("user");
//             const pass = params.get("pass");

//             if(user === "admin" && pass==="123"){
//                 res.end("Login Successful");
//             }else{
//                 res.end("Invalid cred");
//             }
//         });
//     }
// });
// server.listen(3000);