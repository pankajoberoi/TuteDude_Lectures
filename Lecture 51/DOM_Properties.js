// let e1 = document.querySelector("p");
// console.log(e1.innerText); //return screen ke upar available

// // innertext vs textContent

// let e2 = document.querySelector("p");
// console.log(e2.textContent); //it an read the text as well it can read the properties

// let e3 = document.querySelector("p");
// console.log(e3.innerHTML);

//Practice
// let element = document.querySelector("p");

// console.log(element.innerText);

// let Name = prompt("Welcome user , Please enter your name");

// 1.name -> aya
// 2.name -> nhi ayya

// if (Name) {
//   element.innerText = "Hello " + Name + " Nice to meet you";
// } else {
//   element.innerText = "Hello user Nice to meet you";
// }

//Adding Elements to your DOM

// 1. create
// 2. add => appendchild()
//3.multiple elements add -> append()

// let heading = document.createElement("h1");
// let heading2 = document.createElement("h2");

// let section = document.querySelector(".screen");

// heading.innerText = "Hello Mitron!!";
// heading2.innerText = "Jai Shree Ram";

// section.appendChild(heading);
// section.appendChild(heading2);

// section.append(heading, heading2);

// let para = document.createElement("p");

// para.innerText = "Good Morning!!";

// section.prepend(para);

// let data = prompt("Enter your salary");
// let display = document.querySelector(".screen");
// if (data > 50000) {
//   let bonus = document.createElement("h1");
//   bonus.innerText = "You will get 10,000 joining bonus";
//   display.append(bonus);
// } else {
//   let duaee = document.createElement("p");
//   duaee.innerText = "Bhai mehnat karo";
//   display.append(duaee);
// }

// login/signup

// let orders = ["Laptop", "Phone", "Headphones", "Screen guard", "cover"];

// let display = document.querySelector(".screen");

// for (let i = 0; i < orders.length; i++) {
//   let item = document.createElement("h3");
//   item.innerText = orders[i];
//   display.append(item);
// }
