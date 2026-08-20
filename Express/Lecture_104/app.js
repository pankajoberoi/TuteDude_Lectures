const express = require("express");
const app = express();
const port = 3000;

const cart = [
  {
    id: 1,
    product: "Laptop",
    price: 70000,
    status: "InStock",
  },
  {
    id: 2,
    product: "Mobile",
    price: 50000,
    status: "InStock",
  },
  {
    id: 3,
    product: "Earphones",
    price: 5000,
    status: "NotAvailable",
  },
  {
    id: 4,
    product: "Mouse",
    price: 7000,
    status: "NotAvailable",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products/:prt", (req, res) => {
  res.send(req.params);
});

app.get("/products", (req, res) => {
  res.send(req.query);
});

app.get("/employees", (req, res) => {
  res.json({
    filters: req.query,
  });
});

app.get("/orders", (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    let data = cart.filter((item) => item.status == req.query.status);
    console.log(data);
    res.send(data);
  } else {
    res.json(cart);
  }
});

app.get("/orders/:id", (req, res) => {
  let data = cart.filter((item) => item.id == req.params.id);
  if (Object.keys(req.query).length !== 0) {
    let Filtereddata = data.filter((item) => item.status == req.query.status);
    console.log(Filtereddata);
    res.send(Filtereddata);
  } else {
    res.send(data);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
