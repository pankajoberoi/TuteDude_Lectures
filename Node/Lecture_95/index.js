const http = require("http");

const port = 8080;

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 201;
    res.setHeader("Content-Type", "Text/plain");
    res.end("Home Page");
  } else if (req.url === "/user") {
    res.statusCode = 200;
    res.end("Hello Mitron");
  } else if (req.url === "/about") {
    res.statusCode = 300;
    res.end("I am at about page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(port, () => {
  console.log("Server running at port : " + port);
});
