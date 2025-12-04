console.log("Hello mitron!!!!!");

// const URL = "https://jsonplaceholder.typicode.com/users";
// let button = document.getElementById("btn");
// let Screen = document.getElementById("screen");

// async function getUsers() {
//   console.log("getting data");
//   let data = await fetch(URL);
//   let response = await data.json(); //convert into javascript objects
//   console.log(response);

//   response.forEach((el) => {
//     let info = el.name;
//     let element = document.createElement("p");
//     element.innerText = info;
//     Screen.appendChild(element);
//   });
// }

// button.addEventListener("click", getUsers);

// let saveBtn = document.getElementById("save");

// saveBtn.addEventListener("click", () => {
//   let storedValue = document.getElementById("name").value;
//   sessionStorage.setItem("EmpName", storedValue);
// });

// let showBtn = document.getElementById("show");

// showBtn.addEventListener("click", () => {
//   let storedValue = sessionStorage.getItem("EmpName");
//   document.getElementById("output").textContent = "Saved : " + storedValue;
// });

// let locBtn = document.getElementById("loc");

// locBtn.addEventListener("click", () => {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       const { latitude, longitude } = position.coords;
//       document.getElementById(
//         "output"
//       ).textContent = `Latitude : ${latitude}, Longitude : ${longitude}`;
//     },
//     (error) => {
//       document.getElementById("output").textContent = "Location access denied";
//     }
//   );
// });

let copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click", async () => {
  let storedValue = document.getElementById("text").value;
  await navigator.clipboard.writeText(storedValue);
  alert("Copied to clipboard!");
});
