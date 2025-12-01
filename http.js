// const http = require('http');
// //create a basic server
// const server = http.createServer((req,res)=>{
//     res.write("hello dolly welcome to server");
//     res.end();
// });
// server.listen(3000,()=>{
//     console.log("server running at local host");
// });


const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.method === "GET") {
    // send index.html
    fs.readFile("index.html", "utf8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (req.method === "POST") {
    let body = "";

    req.on("data", data => {
      body += data;
    });

    req.on("end", () => {
      const form = new URLSearchParams(body);

      const name = form.get("name");
      const email = form.get("email");
      const city = form.get("city");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <h2>Form Submitted</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>City:</b> ${city}</p>
      `);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


// <!DOCTYPE html>
// <html>
// <head>
//     <title>Simple Form</title>
// </head>
// <body>
//     <h2>User Form</h2>

//     <form action="/" method="POST">
//         Name: <input type="text" name="name"><br><br>
//         Email: <input type="text" name="email"><br><br>
//         City: <input type="text" name="city"><br><br>

//         <button type="submit">Submit</button>
//     </form>

// </body>
// </html>


const http = require("http");

const server = http.createServer((req, res) => {

  // Serve form on GET request
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h2>Simple Form</h2>
      <form method="POST">
        Name: <input type="text" name="name"><br><br>
        Email: <input type="text" name="email"><br><br>
        City: <input type="text" name="city"><br><br>
        <button type="submit">Submit</button>
      </form>
    `);
  }

  // Handle form submission
  if (req.method === "POST") {
    let body = "";

    // Only 1 event needed (cannot remove this in HTTP)
    req.on("data", data => {
      body += data;
    });

    req.on("end", () => {
      const params = new URLSearchParams(body);

      const name = params.get("name");
      const email = params.get("email");
      const city = params.get("city");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <h2>Form Submitted</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>City:</b> ${city}</p>
      `);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
