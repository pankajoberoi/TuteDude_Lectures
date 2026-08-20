const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.all("/inspect", (req, res) => {
  res.json({
    method: req.method,
    url: req.originalUrl,
    path: req.path,
    params: req.params,
    query: req.query,
    Headers: req.headers,
    body: req.body,
    hostname: req.hostname,
    ip: req.ip,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
