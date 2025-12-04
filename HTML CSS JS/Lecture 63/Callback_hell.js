console.log("Hello Mitron!!!!");

// order -> order details and order instractions Make it spicy

// Zomato

//callback functions bolte hai
// function order() {
//   console.log("Cooking instructions : make it spicy ");
// }

// function Zomato(name, callback) {
//   console.log("Picking a restraunt");
//   setTimeout(() => {
//     console.log("Order for " + name);
//     callback();
//   }, 3000);
// }

// Zomato("Pankaj", order);

// chain multiple function

// order -> place -> cooking is started -> food cooked -> food packed -> food deliver
// t1                    t2            t3             t4
// function swiggy() {
//   console.log("Order Placed");

//   setTimeout(() => {
//     console.log("Cooking started!");
//     setTimeout(() => {
//       console.log("Food Cooked!");
//       setTimeout(() => {
//         console.log("Food packed!");
//         setTimeout(() => {
//           console.log("Food Delivered!");
//         }, 4000);
//       }, 2000);
//     }, 3000);
//   }, 1000);
// }

// swiggy();

// Coding paradigm -> galt

// const Status = document.getElementById("status");

// function eatSure() {
//   setTimeout(() => {
//     Status.textContent = "Order placed...";
//     Status.style.color = "orange";

//     setTimeout(() => {
//       Status.textContent = "Cooking food...";
//       Status.style.color = "blue";

//       setTimeout(() => {
//         Status.textContent = "Packing order...";
//         Status.style.color = "purple";

//         setTimeout(() => {
//           Status.textContent = "Delivered...";
//           Status.style.color = "green";
//         }, 4000);
//       }, 2000);
//     }, 3000);
//   }, 1000);
// }

// eatSure();

// =========================================================
// Data flow?

function getUser(callback) {
  setTimeout(() => {
    console.log("User Fetched");
    callback({ id: 1, name: "Pankaj" });
  }, 2000);
}

function getOrders(userName, callback) {
  setTimeout(() => {
    console.log(`Orders fetched for user ${userName}`);
    callback(["Pizza", "Burger"]);
  }, 3000);
}

function getOrderDetails(order, callback) {
  setTimeout(() => {
    console.log(`Details fetched for order :${order}`);
    callback({ item: order, status: "Delivered!!" });
  }, 4000);
}

getUser((user) => {
  getOrders(user.name, (orders) => {
    getOrderDetails(orders[0], (details) => {
      console.log(details);
    });
  });
});
