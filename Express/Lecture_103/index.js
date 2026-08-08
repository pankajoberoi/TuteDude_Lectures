const express = require("express");
const app = express();
const port = 3000;

app
  .route("/students")
  .get((req, res) => {
    res.send("I am student of DAV school");
  })
  .post((req, res) => {
    res.send("i am post req");
  })
  .delete((req, res) => {
    res.send("i am delete req!!");
  });

app.get(
  "/employees",
  (req, res, next) => {
    console.log("Authentication");
    next();
  },
  (req, res) => {
    console.log("Authorize");
    res.send("Multiple handler execured!!");
  },
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
