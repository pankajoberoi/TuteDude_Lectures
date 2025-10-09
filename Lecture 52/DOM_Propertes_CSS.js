console.log("Welcome Mitron!!!");

// let heading = document.querySelector("h3");

// heading.remove();

// let main = document.querySelector("div");

// let e1 = document.querySelector("h3");

// main.removeChild(e1);

// let element = document.querySelector("div");

// console.log(element.style);

// let color = prompt("Enter the color for your room");

// element.style.backgroundColor = color;

// element.style.width = "500px";
// element.style.fontSize = "50px";
// element.style.border = "7px solid red";

// if you want to handle multiple properties a single time -> cssText

// element.style.cssText =
//   "background-color:blue; color:white; font-size:50px; text-decoration:underline;";

// setAttribute()  getAttribute()

// Revisit after events
// let element = document.querySelector("a");

// let hrefVal = element.getAttribute("href");

// console.log(hrefVal);

// if (hrefVal == "https://tutedude.com/") {
//   alert("Welcome to yur future guide");
// } else {
//   alert("Could be a spam link");
// }

// let element = document.querySelector("a");

// let hrefVal = element.getAttribute("href");

// let element2 = document.querySelector("p");

// element2.innerText = hrefVal;

// ===========================================
// setAttribute

// let images = [
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/500px-Virat_Kohli_in_PMO_New_Delhi.jpg",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/500px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",
// ];

// let Panel = document.querySelector("#cricketers");

// for (let i = 0; i < images.length; i++) {
//   let image = document.createElement("img");
//   image.setAttribute("src", images[i]);
//   Panel.append(image);
// }

// let image = document.querySelector("img");

// image.setAttribute(
//   "src",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/500px-Virat_Kohli_in_PMO_New_Delhi.jpg"
// );

// => user = student / teacher

let role = prompt("Please Enter your role");

if (role == "student") {
  let mail = document.querySelector("#email");
  mail.setAttribute("required", "true");
}
