console.log("Hello Mitron!!");

// console.log("Statement 1");
// console.log("Statement 2");
// console.log("Statement 3");

// let youtube = document.getElementById("btn");

// youtube.addEventListener("click", () => {
//   console.log("Template for profile");
//   setTimeout(() => {
//     console.log("Data for profile");
//   }, 5000);

//   console.log("Template for main section");
//   setTimeout(() => {
//     console.log("Data for main");
//   }, 8000);

//   console.log("Template footer");
//   setTimeout(() => {
//     console.log("Data for footer");
//   }, 3000);
// });

//setTimeout()
// One of the way to perform async operations

// setTimeout(() => {
//   console.log("Data given you in response object");
// }, 3000); //3sec

// |
// |
// 1000

//Example to explain event loop
console.log("Template for header");
setTimeout(() => {
  console.log("Got your data for header");
}, 0);

console.log("Template for main section");
setTimeout(() => {
  console.log("Got your data for main section");
}, 0);

console.log("Template footer");
