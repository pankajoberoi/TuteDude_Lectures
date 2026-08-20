const express = require("express");
const app = express();
const port = 3000;

const emps = [
  { id: 1, name: "Pankaj", project: "FS" },
  { id: 2, name: "Amar", project: "DS" },
  { id: 3, name: "Kunal", project: "KS" },
];

app.get("/employees", (req, res) => {
  res.json(emps);
});

//Dynamic one -> specific user -> Route parameter
// app.get("/employees/:id", (req, res) => {
//   console.log("i am inside id wala path");
//   let data = emps.filter((emp) => emp.id == req.params.id);
//   if (data.length != 0) {
//     res.send(data);
//   } else {
//     res.send("User Id not found");
//   }
// });

// app.get("/employeeName/:name", (req, res) => {
//   console.log("i am inside name wala path");
//   console.log(req.params);

//   res.send(req.params.name);
// });

app.get("/employees/:empId/project/:proId", (req, res) => {
  let data = emps.filter((emp) => {
    if (emp.id == req.params.empId) {
      if (emp.project == req.params.proId) {
        return emp;
      }
    }
  });

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
