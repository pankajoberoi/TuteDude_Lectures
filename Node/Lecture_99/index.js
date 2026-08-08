const http = require("http");
const { uptime } = require("process");
const url = require("url");

let server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  //health check route
  if (req.method === "GET" && path === "/health") {
    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "UP",
        serverTime: new Date(),
        uptime: process.uptime(),
      }),
    );
  } else {
    res.writeHead(404);

    res.end("Page not found");
  }
});

server.listen(8080, () => {
  console.log("Server running at port 8080");
});
