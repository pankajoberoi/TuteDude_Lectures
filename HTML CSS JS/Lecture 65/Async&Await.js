console.log("hello mitron!!!");

// Promise ka syntax
// fetchData()
//     .then(ProcessData)
//     .then(showData)
//     .catch(handleError)
//     .finally(cleanup)

// Async await -> keep your code more cleaner -> sync way mai likha gya

// Introduction

// async function greet() {
//   return "Hello Janta!!";
// }

// console.log(greet());

// greet().then((msg) => console.log(msg));

// API -> req -> time -> res

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data Loaded!!!");
//     }, 3000);
//   });
// }

// async function showData() {
//   console.log("Fetching Data...");
//   let results = await getData(); //-> resolve , reject
//   console.log(results);
//   console.log("Process Completed!!!");
// }
// showData();

// async function showData2() {
//   console.log("Fetching Data again...");
//   let results = await getData(); //-> resolve , reject
//   console.log(results);
//   console.log("Process Completed!!!");
// }
// showData2();

// console.log("Execute further 1000 line code");

// function orderPlaced() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Step 1: Order Placed");
//       resolve("Success");
//     }, 3000);
//   });
// }

// function cookFood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let Success = false;
//       if (Success) {
//         console.log("Step 2: Cooking done!!");
//         resolve();
//       } else {
//         reject("Cooking failed due no electricity");
//       }
//     }, 3000);
//   });
// }

// function deliverFood() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Step 3: Delivered");
//       resolve("Success");
//     }, 3000);
//   });
// }

// orderPlaced()
//   .then(cookFood)
//   .then(deliverFood)
//   .then(() => {
//     console.log("Order Process Completed");
//   })
//   .catch((err) => console.log("Error " + err))
//   .finally(() => console.log("Process Ended"));

// async function ProcessOrder() {
//   await orderPlaced();
//   await cookFood();
//   await deliverFood();
//   console.log("Food Delivered");
// }

// ProcessOrder();

// console.log("1000 line of code hai");

// async function ProcessOrder() {
//   try {
//     await cookFood();
//     console.log("Delivered!!!");
//   } catch (error) {
//     console.log("Error :", error);
//   } finally {
//     console.log("All allocated resources are free now!!!");
//   }
// }

// ProcessOrder();

// function UpdateStatus(msg, color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const Status = document.getElementById("status");
//       Status.textContent = msg;
//       Status.style.color = color;
//       resolve("Balle Balle");
//     }, delay);
//   });
// }

// UpdateStatus("Order Placed", "Orange", 3000)
//   .then(() => UpdateStatus("Cooking..", "blue", 3000))
//   .then(() => UpdateStatus("Packed!", "purple", 3000))
//   .then(() => UpdateStatus("Delivered!", "green", 3000))
//   .then(() => console.log("All Done!!!!"));

// async function processOrder() {
//   await UpdateStatus("Cooking..", "blue", 3000);
//   await UpdateStatus("Packed!", "purple", 3000);
//   await UpdateStatus("Delivered!", "green", 3000);
//   console.log("All Done!!!!");
// }

// processOrder();

const rice = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Rice Ready"), 4000)
);

const curry = new Promise((resolve, reject) =>
  setTimeout(() => resolve("curry no curry."), 1500)
);

const desert = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Desert Ready"), 1000)
);

async function prepareMeal(params) {
  let results = await Promise.all([rice, curry, desert]);
  console.log("Your meal is ready ", results);
}

prepareMeal();
