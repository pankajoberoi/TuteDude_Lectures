const http = require("http");
const { uptime } = require("process");
const url = require("url");

function readbody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

let server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (req.method === "POST" && path === "/login") {
    let rawJson = await readbody(req);

    try {
      const parse = JSON.parse(rawJson);
      if (parse.name === "Pankaj" && parse.password === 123456) {
        res.writeHead(200, {
          "content-type": "application/json",
        });
        res.end(
          JSON.stringify({
            message: "Login Successful",
          }),
        );
      } else {
        res.writeHead(404, {
          "content-type": "application/json",
        });
        res.end(
          JSON.stringify({
            message: "User not found",
          }),
        );
      }
    } catch (err) {}
  }
});

server.listen(8080, () => {
  console.log("Server running at port 8080");
});
