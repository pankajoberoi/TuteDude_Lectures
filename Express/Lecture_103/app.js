const express = require("express");
const dumyData = require("./MOCK_DATA");
const fs = require("fs");
const app = express();
const port = 8080;

//Middleware
app.use(express.urlencoded({ extended: false }));

app.post("/students", (req, res) => {
  const data = req.body;
  fs.appendFile(
    "./SavedData.txt",
    "\n" + JSON.stringify(data) + "\n",
    (err) => {
      if (err) {
        return res.json({
          status: "Error addig student",
        });
      } else {
        return res.json({
          status: "Student Added",
          name: data.name,
        });
      }
    },
  );
});

app.get("/students", (req, res) => {
  res.json(dumyData);
});

app.delete("/students", (req, res) => {
  // HW
  res.send("Hello i am a delete reques");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
