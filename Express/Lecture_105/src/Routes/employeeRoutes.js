const express = require("express");

const router = express.Router();

let Employees = [
  { id: 1, name: "Pankaj" },
  {
    id: 2,
    name: "Joban",
  },
];

router
  .route("/")
  .get((req, res) => {
    res.json({
      success: true,
      data: Employees,
    });
  })
  .post((req, res) => {
    const newEmp = { id: Date.now(), name: req.body.name };
    Employees.push(newEmp);
    res.status(201).json({
      success: true,
      data: Employees,
    });
  });

router
  .route("/:id")
  .get((req, res) => {
    const emp = Employees.find((e) => e.id === parseInt(req.params.id));
    if (!emp) {
      res.status(404).json({
        success: false,
        data: "Not Found",
      });
    } else {
      res.status(201).json({
        success: true,
        data: emp,
      });
    }
  })

  .delete((req, res) => {
    let FilteredEMPS = Employees.filter((e) => {
      if (e.id !== parseInt(req.params.id)) {
        return e;
      }
    });
    res.json({
      succees: true,
      message: `Employee ${req.params.id} is deleted`,
      data: FilteredEMPS,
    });
  });

//   .put(() => {});

module.exports = router;
