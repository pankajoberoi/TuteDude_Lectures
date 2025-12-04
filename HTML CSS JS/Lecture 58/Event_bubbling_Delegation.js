console.log("Hello mitron!!");

// Example for bubbling
// let Parent = document.getElementById("parent");
// Parent.addEventListener("click", () => {
//   console.log("Parent Div clicked");
// });

// let childbtn = document.getElementById("child");
// childbtn.addEventListener("click", () => {
//   console.log("child button is clicked");
// });

// btn
// parent

//Example for capturing phase
// let Parent = document.getElementById("parent");
// Parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent Div clicked");
//   },
//   true
// ); //notice this true -> it will enable capturing phase

// let childbtn = document.getElementById("child");
// childbtn.addEventListener("click", () => {
//   console.log("child button is clicked");
// });

// when i enabled capturing phase
// parent
// btn

// Stop event propagation
// let Parent = document.getElementById("parent");
// Parent.addEventListener("click", () => {
//   console.log("Parent Div clicked");
// });

// let childbtn = document.getElementById("child");
// childbtn.addEventListener("click", (e) => {
//   console.log("child button is clicked");
//   e.stopPropagation();
// });

// target vs this

// let List = document.getElementById("list");

// List.addEventListener("click", function (e) {
//   console.log("event.target ", e.target.tagName);
//   console.log("this ", this.tagName);
// });

// const list = document.getElementById("fruitlist");

// list.addEventListener("click", function (e) {
//   if (e.target.tagName === "LI") {
//     alert("You clicked " + e.target.innerText);
//   }
// });

const list = document.getElementById("fruitlist");
const btn = document.getElementById("addBtn");

btn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = prompt("Add fruit");
  list.appendChild(newLi);
});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "lightgreen";
  }
});
