const http = require("http");
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
  const parsedURL = url.parse(req.url, true);

  const path = parsedURL.pathname;

  if (req.method === "GET" && path === "/Dashboard") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end("Welcome to Dashboard");
  } else if (req.method === "GET" && path === "/About") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end("Welcome to about Page");
  } else if (req.method === "GET" && path === "/Attendance") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end("View your attendance");
  } else if (req.method === "POST" && path === "/Attendance") {
    let rawJson = await readbody(req);

    try {
      const parse = JSON.parse(rawJson);
      if (parse.role === "teacher") {
        console.log(parse.name, " entered attendance is ", parse.attendance);
        res.writeHead(201, {
          "content-type": "text/plain",
        });
        res.end("Attendance saved !!");
      } else {
        res.end("You are not auth to save attendance");
      }
    } catch (err) {
      res.end("Data Cant be parsed");
    }
  } else {
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.end("404 Page not found");
  }
});

server.listen(8080, () => {
  console.log("Server running at port 8080");
});
