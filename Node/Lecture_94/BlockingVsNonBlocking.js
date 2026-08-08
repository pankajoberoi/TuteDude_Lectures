// const fs = require("fs");

// console.log("Order Received");

// //blocking request
// const data = fs.readFileSync("Order.txt", "utf-8");

// console.log("Preparing ", data);

// console.log("Next customer please");

// ==================================================

// const fs = require("fs");

// console.log("Order Received");

//Non blocking request
// fs.readFile("Order.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("preparing", data);
// });

// console.log("Next customer please");

console.log("Start of you code");

setImmediate(() => {
  for (let i = 0; i <= 10000000000000; i++) {
    if (i == 10000000000000) {
      console.log("heavy task done");
    }
  }
});

console.log("End of Execution");
