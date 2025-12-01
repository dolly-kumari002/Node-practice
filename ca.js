// build a basic http server in node js that serves multiple html pages(home,about,contact).

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req,res)=>{
//     let filepath = " ";

//     if(req.url === "/" || req.url === "/Home"){
//         filepath = path.join(__dirname,"Home.html");
//     }
//     else if(req.url === "/about"){
//         filepath = path.join(__dirname,"about.html" );
//     }
//        else if(req.url=== "/contact"){
//         filepath = Path.join(__dirname,"contact.html");
//        }
//     else{
//         res.writeHead(404,{"Content-Type": "text/html"});
//         return res.end("404 page not found");
//     }
//     fs.readFile(filepath,(err,data)=>{
//         if(err){
//             res.writeHead(500,{"Content-Type","text/html"});
//             return res.end("500 server error");
//         }
//         res.writeHead(200,{"Content-Type":"text/html"});
//         return res.end(data);
//     });
// });
// server.listen(3000);

// <!DOCTYPE html>
// <html>
// <body>
//     <h1>Home Page</h1>
//     <p>Welcome to the home page!</p>

//     <a href="/about">About</a>
//     <a href="/contact">Contact</a>
// </body>
// </html>


// build an expresss.js application that renders html pages with dynamic data injected 
// from the server
// Install Dependencies
// npm init -y
// npm install express ejs

// const express = require("express");
// const app = express();
// app.set("view engine","ejs");
// app.get("/",(req,res)=>{
//     res.render("home",{
//         title: "home page",
//         message:"welcome to the home page",
//         students :["dolly"];
//     });
// });
// app.about("/",(req,res)=>{
//     res.render("about",{
//         title:"about us",
//         description:"this page contains information about our websites"
//     })
// })
// app.get("/contact",(req,res)=>{
//     res.render("contact",{
//         title:"contact page",
//         email:"dolly",
//         phone:"7320930332"
//     });
// });
// app.listen(3000);

// create a custom router using the http module and server 
// different json or html responses based on url paths

// const http = require("http");
// function router(req,res){
//     const url = req.url;
//     const method = req.method;

//     if(req.url==="/"&& method ==="GET"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end(`
//             <h1>Home page</h1>
//         <p>Welcome to the custom router </p>
//         <a href="/json">Go to json data </a>
//         <a href="/about">About Page</a>`);
//     }
// }
// else if(url === "/about" && method === "GET"){
//      res.writeHead(200,{"Content-Type":"text/html"});
//      res.end(`
//         <h1>About us</h1>
//         <p>This page is served using </p>`);
// }
// else if(url === "/json" && method === "GET"){
//     const data = {
//         success : true,
//         message : "This is JSON data served via customer ",
//         users:["dolly"]
//     };
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end("404 not found");
// }
// const server = http.createServer(router);
// server.listen(3000);

// implement get and post request handling using the http module and display the 
// submitted data on the browser
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     if(req.url=== "GET" && req.url === "/"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end(`
//             <h1>Submit your details</h1>
//             <form action="/submit" method = "POST">
//             <label>Name:</label>
//             <input type="text" name = "name" required <br><br>
//             <label>Email</label>
//             <input type="email" name="email" <br><br>
//             <button type="submit">submit</button>
//             </form>`);
//     }
//     else if(req.method === "POST" && req.url ==="/submit"){
//         let body = "";
//         req.on("data",chunk =>{
//             body+=chunk();
//         });
//         req.on("end",()=>{
//             const params = new URLSearchParams(body);
//             const name = params.get("name");
//             const email = params.get("email");

//             res.writeHeaqd(200,{"Content-TYpe": "text/html"});
//             res.end(`
//                 <h1>from submitted successfullt</h1>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>

//                 <a href="/">Go Back</a>
//             `);
//         });
//     }
//     else{
//         res.writeHead(404,{"Content-Type": text/html});
//         res.end("404 page not found")
//     }
//         });
//         server.listen(3000);


// When the user click login store user = "loggedin" in cookie session then display a message on the dashboard 
// "welcome user" Route/login , Route/dashboard, Route/logout
// import express from "express";
// import cookieParser from "cookie-parser";

// const app = express();
// app.use(cookieParser());

// app.get("/login", (req, res) => {
//   res.cookie("user", "loggedin");
//   res.send("<h2>You are logged in. Go to <a href='/dashboard'>Dashboard</a></h2>");
// });

// app.get("/dashboard", (req, res) => {
//   if (req.cookies.user === "loggedin") {
//     res.send("<h1>Welcome User</h1><a href='/logout'>Logout</a>");
//   } else {
//     res.send("<h2>Please login first → <a href='/login'>Login</a></h2>");
//   }
// });

// app.get("/logout", (req, res) => {
//   res.clearCookie("user");
//   res.send("<h2>You are logged out. <a href='/login'>Login again</a></h2>");
// });

// app.listen(3000,()=>{
//     console.log("server running at local host");
// })







// Here is a complete Session-Based Login System using Express + express-session
// with:
// import express from "express";
// import session from "express-session";
// import path from "path";
// import { fileURLToPath } from "url";

// const app = express();

// // ES module dirname fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

// // Session Middleware
// app.use(
//   session({
//     secret: "mysecretkey",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Fake credentials
// const USERNAME = "dolly";
// const PASSWORD = "12345";

// // Login Page
// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "login.html"));
// });

// // Handle Login
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   if (username === USERNAME && password === PASSWORD) {
//     req.session.user = username;
//     return res.send(`<h2>Login Successful! <a href="/dashboard">Go to Dashboard</a></h2>`);
//   }

//   res.send(`<h2>Invalid Credentials! <a href="/login">Try Again</a></h2>`);
// });

// // Protected Dashboard
// app.get("/dashboard", (req, res) => {
//   if (req.session.user) {
//     return res.send(`
//       <h1>Welcome ${req.session.user} 🎉</h1>
//       <a href="/logout">Logout</a>
//     `);
//   }

//   res.send(`<h2>Please login → <a href="/login">Login</a></h2>`);
// });

// // Logout
// app.get("/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.send(`<h2>You are logged out. <a href="/login">Login again</a></h2>`);
//   });
// });

// // Start Server
// app.listen(3000, () => console.log("Server running at port 3000"));




// count the session every time user clicks on add to cart increase 
// cartcount inside session display count on cartcount
// import express from "express";
// import session from "express-session";

// const app = express();

// // Session middleware
// app.use(
//   session({
//     secret: "cartsecret",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Route: Add to cart
// app.get("/add", (req, res) => {
//   // If cartCount does not exist, initialize it
//   if (!req.session.cartCount) {
//     req.session.cartCount = 0;
//   }

//   // Increase count
//   req.session.cartCount++;

//   res.send(`
//     <h2>Item added to cart!</h2>
//     <p>Current Cart Count: ${req.session.cartCount}</p>
//     <a href="/cartcount">View Cart Count</a>
//   `);
// });

// // Route: Display cart count
// app.get("/cartcount", (req, res) => {
//   const count = req.session.cartCount || 0;

//   res.send(`
//     <h1>Cart Count: ${count}</h1>
//     <a href="/add">Add More Items</a>
//   `);
// });

// // Clear cart for testing
// app.get("/clear", (req, res) => {
//   req.session.cartCount = 0;
//   res.send(`<h2>Cart Cleared!</h2> <a href="/cartcount">Check Count</a>`);
// });

// // Start server
// app.listen(3000, () => console.log("Server running on port 3000"));



// feedback from json implement /api/feedback route 
// that recieve json data and store in an array
// import express from "express";

// const app = express();

// // Middleware to read JSON body
// app.use(express.json());

// // Feedback storage array
// let feedbackList = [];

// // POST: Receive feedback and save it
// app.post("/api/feedback", (req, res) => {
//   const feedback = req.body;

//   // Simple validation
//   if (!feedback.name || !feedback.message) {
//     return res.status(400).json({ error: "Name and message are required" });
//   }

//   feedbackList.push(feedback);

//   res.json({
//     message: "Feedback received successfully!",
//     data: feedback
//   });
// });

// // GET: Send all stored feedback
// app.get("/api/feedback", (req, res) => {
//   res.json(feedbackList);
// });

// // Start server
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });




// create a middleware that shows a website under maintainance
//  page for all except/admin

// import express from "express";

// const app = express();

// // Maintenance Middleware
// app.use((req, res, next) => {
//   // Allow admin routes
//   if (req.url.startsWith("/admin")) {
//     return next();
//   }

//   // Otherwise show maintenance message
//   res.send(`
//     <h1>🚧 Website Under Maintenance 🚧</h1>
//     <p>We will be back shortly!</p>
//   `);
// });

// // Admin Dashboard
// app.get("/admin", (req, res) => {
//   res.send("<h1>Welcome to Admin Dashboard</h1>");
// });

// // Admin settings
// app.get("/admin/settings", (req, res) => {
//   res.send("<h1>Admin Settings Page</h1>");
// });

// // (Any route here will be blocked by maintenance middleware)

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });



// // create a middlewear based express app that logs all front end req and display
// import express from "express";

// const app = express();

// // Array to store all logs
// let requestLogs = [];

// // ------------ MIDDLEWARE FOR LOGGING -------------
// app.use((req, res, next) => {
//   const logEntry = {
//     method: req.method,
//     url: req.url,
//     time: new Date().toLocaleTimeString()
//   };

//   console.log(logEntry);  // also log in terminal

//   requestLogs.push(logEntry); // store in array

//   next(); // continue request
// });

// // ---------------- ROUTES ---------------------

// app.get("/", (req, res) => {
//   res.send("<h2>Home Page</h2><a href='/logs'>View Logs</a>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h2>About Page</h2>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h2>Contact Page</h2>");
// });

// // Route to display all logs
// app.get("/logs", (req, res) => {
//   let html = "<h2>Request Logs</h2><ul>";

//   requestLogs.forEach((log, index) => {
//     html += `<li>${index + 1}) ${log.method} → ${log.url} at ${log.time}</li>`;
//   });

//   html += "</ul>";

//   res.send(html);
// });

// // ---------------------------------------------

// app.listen(3000, () => console.log("Server running on port 3000"));





// create a system that sends different http status code based on user actions on a webpage(200 for success , 
//     404 for wrong url page)
// import express from "express";
// const app = express();
// const PORT = 3000;

// // Home route → SUCCESS (200 OK)
// app.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("✔ Success: You are on the Home Page!");
// });

// // Login route → SUCCESS (200 OK)
// app.get("/login", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("✔ Login Page Loaded Successfully!");
// });

// // Example Route for User Action → SUCCESS (200 OK)
// app.get("/buy", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("✔ You bought an item successfully!");
// });

// // 404 Handler → WRONG URL
// app.use((req, res) => {
//   res.writeHead(404, { "Content-Type": "text/plain" });
//   res.end("❌ Error 404: Page Not Found");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// create a node js application that uses promises to fetch user details from a json 
// file and render them on a html page

// <!DOCTYPE html>
// <html>
// <body>
//   <h2>User Details</h2>
//   <div id="users"></div>

//   <script>
//     fetch("/users")
//       .then(res => res.json())
//       .then(data => {
//         document.getElementById("users").innerHTML =
//           data.map(u => `<p>${u.name} - ${u.age}</p>`).join("");
//       });
//   </script>
// </body>
// </html>

// import express from "express";
// import { promises as fs } from "fs";

// const app = express();
// app.use(express.static("public"));

// app.get("/users", async (req, res) => {
//   try {
//     const data = await fs.readFile("users.json", "utf-8"); // Promise
//     res.json(JSON.parse(data));
//   } catch (err) {
//     res.status(500).send("Error reading file");
//   }
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));



Here is the simplest EventEmitter + Browser update system you can make.
SUPER SHORT. Only 2 small files.

✅ server.js (very simple)
const express = require("express");
const EventEmitter = require("events");

const app = express();
const emitter = new EventEmitter();
const PORT = 3000;

// Simple SSE connection
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");

  emitter.on("update", (msg) => {
    res.write(`data: ${msg}\n\n`);
  });
});

// Endpoint to trigger event
app.get("/trigger", (req, res) => {
  emitter.emit("update", "New update from server!");
  res.send("Event Triggered!");
});

app.listen(PORT, () => console.log("Server running http://localhost:3000"));

✅ index.html (frontend)
<!DOCTYPE html>
<html>
<body>
  <h2>Real-time Updates</h2>
  <div id="output"></div>

  <script>
    const evt = new EventSource("/events");
    evt.onmessage = (e) => {
      document.getElementById("output").innerHTML += `<p>${e.data}</p>`;
      console.log("Event received:", e.data);
    };
  </script>
</body>
</html>