const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      console.log("Received Body : ", body); //raw json format (string)
    });
    return;
  } else {
    res.statusCode = 404;
    res.end("Path/Method not found");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
