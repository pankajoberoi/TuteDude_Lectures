const express = require("express");

const router = express.Router();

//mock database
let products = [
  { id: 1, name: "Mouse", price: 3000 },
  { id: 2, name: "Keyboard", price: 5000 },
];

router
  .route("/")
  .get((req, res) => {
    res.json({
      success: true,
      data: products,
    });
  })
  .post((req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        success: false,
        error: "Both Name and Price is required to save the data",
      });
    }

    const newProduct = { id: Date.now(), name, price };
    products.push(newProduct);
    res.status(201).json({
      succees: true,
      data: products,
    });
  });

router
  .route("/:id")
  .get((req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({
        succees: false,
        error: "Product not found",
      });
    } else {
      res.json({
        succees: true,
        data: product,
      });
    }
  })
  .put((req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({
        succees: false,
        error: "Product not found",
      });
    } else {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;

      res.json({
        succees: true,
        data: products,
      });
    }
  })
  .delete((req, res) => {
    let FilteredItems = products.filter((p) => {
      if (p.id !== parseInt(req.params.id)) {
        return p;
      }
    });
    console.log(FilteredItems);
    res.json({
      succees: true,
      message: `Product ${req.params.id} is deleted`,
      data: FilteredItems,
    });
  });

module.exports = router;
