const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("Fetching Data");
  } else if (req.method === "POST") {
    res.end("Creating DATA");
  } else if (req.method === "PUT") {
    res.end("Update Entire Data");
  } else if (req.method === "PATCH") {
    res.end("Upadting Partial Data");
  } else if (req.method === "DELETE") {
    res.end("Delete DATA");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
