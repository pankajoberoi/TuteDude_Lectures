const app = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 8045;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}  for ${process.env.App_Name}`);
});
