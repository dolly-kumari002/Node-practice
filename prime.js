// const http = require("http");

//     function isPrime(num){
//       if(num<=1) return false;
//       for(let i=2; i<=Math.sqrt(num); i++){
//         if(num%i===0) return false;
//       }
//       return true;
//     }
//  const server = http.createServer((req,res)=>{
//     const url = new URL(req.url,`http://${req.headers.host}`);
//     const num = parseInt(url.searchParams.get("number"));

//     res.writeHead(200,{"Content-Type": "text/plain"});

//     if(!num){
//         res.end("please pass anumber like http://localhost:3000/?number=17");
//         return;
//     }
//     if (isPrime(num)){
//         res.end(`${num} is a prime no`);
//     }else{
//         res.end(`${num} is not a prime no`);
//     }
//  });
//  server.listen(3000,()=>{
//     console.log("server is running at local host");
//  });

const http = require("http");
const fs = require("fs");
const path = require("path");

function isPrime(num){
  if(num<=1) return false;
  for(let i=2 ; i<=Math.sqrt(num); i++){
    if(num%i===0) return false;
  }
  return true;
}
const server = http.createServer((req,res)=>{
  if(req.url==="/"){
    const file = fs.readFileSync(path.join(__dirname,"index.html"));
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(file);
  }
  else if(req.url.startsWith("/check")){
    const url = new URL(req.url ,`http://${req.headers.host}`);
    const num = parseInt(url.searchParams.get("number"));
    res.writeHead(200,{"Content-Type":"text/plain"});

    if(!num){
      res.end("Please enter a valid number");
      return;
    }
    if(isPrime(num)){
      res.end(`${num} is a prime no`);
    }else{
      res.end(`${num} is not a prime no`);
    }
  }
});
server.listen(3000,()=>{
  console.log("server is running on port http://localhost:3000");
})





<!DOCTYPE html>
<html>
<head>
  <title>Prime Number Checker</title>
</head>
<body>

<h2>Prime Number Checker</h2>

<label>Enter a number:</label>
<input type="number" id="num" />
<button onclick="checkPrime()">Check</button>

<p id="result"></p>

<script>
  function checkPrime() {
    const number = document.getElementById("num").value;

    // Calling backend API: /check?number=value
    fetch(`/check?number=${number}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById("result").innerText = data;
      })
      .catch(err => {
        document.getElementById("result").innerText = "Error: " + err;
      });
  }
</script>

</body>
</html>
