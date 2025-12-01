const WebSocket = require("ws");

// Create WebSocket server on port 8080
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("A client connected");

  // Send a welcome message to client
  socket.send("Welcome to the WebSocket server!");

  // Listen for messages from client
  socket.on("message", (message) => {
    console.log("Received from client:", message);

    // Send response back to client
    socket.send("Server received: " + message);
  });

  // Handle client disconnect
  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");
