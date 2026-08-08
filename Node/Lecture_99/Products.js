const http = require("http");
const { uptime } = require("process");
const url = require("url");

let server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (req.method === "GET" && path === "/products") {
    const products = [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mobile" },
    ];

    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(JSON.stringify(products));
  }
});

server.listen(8080, () => {
  console.log("Server running at port 8080");
});
