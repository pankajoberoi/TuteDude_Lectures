// console.log("Welcome mitron!!!");

// // E-commerce Order

// let orders = [
//   { id: 1, product: "Laptop", price: 60000 },
//   { id: 2, product: "Mobile", price: 20000 },
//   { id: 3, product: "Headphones", price: 2000 },
//   { id: 4, product: "Tablet", price: 15000 },
// ];

// // Find all the orders above 10000

// let expensive = orders.filter((obj) => {
//   return obj.price > 10000;
// });

// console.log(expensive);

// //Total Expense
// let TotalKharcha = orders.reduce((sum, obj) => {
//   sum = sum + obj.price;
//   return sum;
// }, 0);

// console.log(TotalKharcha);

// //product names -> print -> har item

// let products = orders.map((obj) => console.log(obj.product));

// //sort by price
// let sortedOrders = orders.sort((a, b) => a.price - b.price);

// console.log(sortedOrders);

// let Students = ["Pankaj", "Rahul", "Rajat"];

// function printStudentNames(arr) {
//   arr.forEach((student, index) => {
//     console.log(`${index + 1} . ${student}`);
//   });
// }

// printStudentNames(Students);

//Documentation for , forEach forIn and forOf

//Find total salaries

// let salaries = [30000, 45000, 50000, 60000];

// function totalSalaries(arr) {
//   let sum = 0;
//   for (let sal of arr) {
//     sum = sum + sal;
//   }
//   return sum;
// }

// let output = totalSalaries(salaries);
// console.log(output);

//Display Employee info(using for in)?

let Employee = {
  firstName: "Pankaj",
  age: 25,
  department: "IT",
  salary: 50000,
};

function showEmployeeInfo(obj) {
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}

showEmployeeInfo(Employee);
