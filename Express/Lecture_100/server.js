const express = require("express");
const app = express();
const port = 8000;

console.log(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  //   console.log(req);
  //   res.send("i am at about");
  res.json([
    {
      name: "Pankaj",
      age: 25,
    },
  ]);
});

app.get("/contact", (req, res) => {
  res.send("i am at contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
