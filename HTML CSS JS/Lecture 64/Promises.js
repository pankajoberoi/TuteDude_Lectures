console.log("hello Mitron!!!!");

// let output = new Promise((resolve, reject) => {
//   console.log("Mujhe ek paani ka glass doo");
//   //   resolve("kardi apki demand puri");
//   reject("Mera dil nhi hai");
// });

// console.log(output); // -> return a object -> promise -> default -> pending

// function AmazonOrder(name) {
//   return new Promise((resolve, reject) => {
//     console.log("Order PLaced");
//     setTimeout(() => {
//       console.log("Iphone for :" + name);
//     //   resolve("Successfully delivered!");
//         reject("Raste mai baad aa gyi");
//     }, 5000);
//   });
// }

// let YourOrder = AmazonOrder("Pankaj");
// Amazon -> 24 hours -> after time end -> 2 option -> resolve/reject

// YourOrder.then((res) => {
//   //next step
//   //   console.log(res);
//   alert("Ab daldegi insta pe story!");
// });

// YourOrder.catch((err) => {
//   //next step
//   //   console.log(err);
//   alert("Refund my payment!");
// });

// =========================================
// Better version of callback

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
//       let Success = true;
//       if (Success) {
//         console.log("Step 2: Cooking done!!");
//         resolve();
//       } else {
//         console.log("Cooking failed");
//         reject("Cooking failed");
//       }
//     }, 2000);
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

// let output1 = orderPlaced();
// output1.then(() => {
//   let output2 = cookFood();
//   output2.then(() => {
//     let output3 = deliverFood();
//     output3.then(() => {
//       console.log("Order process completed!!");
//     });
//   });
// });

// 3no function -> 3 sec ek sath wait kar rhe hai

//short hand trick and finally block
// orderPlaced()
//   .then(cookFood)
//   .then(deliverFood)
//   .then(() => {
//     console.log("Order Process Completed");
//   })
//   .catch((err) => console.log("Error " + err))
//   .finally(() => console.log("Process Ended"));

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

// =========================================================================

// Multitask ek hi time pe ?
// Promise.all?

// Kitchen => rice , curry , desert

const rice = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Rice Ready"), 4000)
);

const curry = new Promise((resolve, reject) =>
  setTimeout(() => reject("curry no curry."), 1500)
);

const desert = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Desert Ready"), 1000)
);

Promise.all([rice, curry, desert])
  .then((items) => console.log("All dishes are Ready ", items))
  .catch((err) => console.log("Error : ", err));
