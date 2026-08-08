const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  res.writeHead(201, "success from pankaj server", {
    "content-encoding": "UTF-8",
  });
  res.end("Get Request Received!!");
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
