const express = require("express");
const EmpData = require("./data");

const app = express();

console.log(app);

app.get("/", (req, res) => {
  res.send("Hello from my API");
});

app.get("/getEmployees", (req, res) => {
  res.json(EmpData);
});

app.get("/students", () => {});

module.exports = app;
