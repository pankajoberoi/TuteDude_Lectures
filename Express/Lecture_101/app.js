const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const password = "Admin@123";

app.get("/login", (req, res) => {
  res.send("Welcome to our Website for admin");
});

module.exports = app;

// Application configuration
// Routes
// Middleware
// error handler
