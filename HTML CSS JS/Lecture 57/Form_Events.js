console.log("Hello mitron!!!");

//Select all input elements
// const inputs = document.querySelectorAll("input");

// //Loop through ecah input and attach a event to it
// inputs.forEach((inp) => {
//   inp.addEventListener("input", (event) => {
//     const id = event.target.id;
//     const value = event.target.value;

//     console.log(`Input changed -> ID: ${id} , Current value: ${value}`);

//     const displayElement = document.getElementById(`display-${id}`);

//     if (displayElement) {
//       displayElement.textContent = value || "-";
//     }
//   });
// });

// input vs change
// DropDown

// const Select = document.getElementById("citySelect");

// Select.addEventListener("change", (event) => {
//   document.getElementById(
//     "SelectedCity"
//   ).textContent = `Selected : ${event.target.value}`;
// });

// Focus & blur styling

// const email = document.getElementById("email");

// email.addEventListener("focus", () => {
//   email.style.background = "lightgreen";
// });

// email.addEventListener("blur", () => {
//   email.style.background = "";

//   if (email.value === "") {
//     alert("Email field is still empty!");
//   }
// });

// Form submit -> preventdefault() validation

// const form = document.getElementById("LoginForm");

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //stop your page to reload
//   const user = document.getElementById("userName").value;
//   const password = document.getElementById("password").value;

//   if (user === "" || password === "") {
//     alert("Please fill out all the fields");
//   } else {
//     alert(`Welcome , ${user}`);
//   }
// });

// Hw1 -> validation -> password -> 1. one special char 2. length >6  3. Atleat one captial char

// const link = document.getElementById("link");

// link.addEventListener("click", (e) => {
//   e.preventDefault(); //stops navigation of your anchor tag
//   alert("Navigation blocked for a demo!");
// });

// Mini project -> live character count

// Keyboard controller background color changer

const msg = document.getElementById("msg");
const count = document.getElementById("count");

msg.addEventListener("input", () => {
  console.log(msg.value.length);
  count.textContent = msg.value.length;

  msg.style.textDecoration = msg.value.length > 100 ? "underline" : "";
});

// expend this example and try to disable typing after 100 words
