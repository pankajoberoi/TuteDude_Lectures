const http = require("http");

function readbody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

let server = http.createServer(async (req, res) => {
  if (req.method === "POST") {
    let rawJson = await readbody(req);

    try {
      const parse = JSON.parse(rawJson);
      console.log(parse);
      console.log("Line 19 :", parse.name);
      res.setHeader("Content-Type", "appliaction/json");
      res.end(JSON.stringify({ message: "Data Parsed successfully" }));
    } catch (err) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "appliaction/json");
      res.end(JSON.stringify({ message: "Data can not be Parsed" }));
    }
    return;
  }

  res.statusCode = 405;
  res.end(JSON.stringify({ message: "Inavlid Request" }));
});

server.listen(8080, () => {
  console.log("Server Listening on PORT 8080");
});
