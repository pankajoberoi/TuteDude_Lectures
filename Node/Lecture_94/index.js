// console.log("Start of you code \n");

// const fs = require("fs");

//blocking request
// const data = fs.readFileSync("test.txt", "utf-8");
// // console.log(data.toString());

// console.log(data);

// console.log("End of code");

// ===================================================================

console.log("Start of you code \n");

const fs = require("fs");

//Non-blocking request (Async)
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log("End of code");
