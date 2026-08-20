const express = require("express");
const app = express();
const port = 3000;

const employeeRouter = require("./src/Routes/employeeRoutes");
const productRouter = require("./src/Routes/productRoutes");
const userRouter = require("./src/Routes/userRoutes");

//Middleware
app.use(express.json());

//We will mount our routers , with a base URL
app.use("/employees", employeeRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.get("/health", (req, res) => {
  res.send("Server is running....");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
