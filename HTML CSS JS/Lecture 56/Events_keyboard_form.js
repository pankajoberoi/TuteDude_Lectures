console.log("hello Mitron!!!");

// document.addEventListener("keydown", (event) => {
//   console.log(event);
//   document.getElementById(
//     "output"
//   ).textContent = `You pressed : ${event.key} (code: ${event.code}) `;
// });

// Detect keyboard shortcuts

// document.addEventListener("keydown", (event) => {
//   if (event.ctrlKey && event.key === "s") {
//     event.preventDefault(); //stops brower to "Save page" action
//     alert("Custom Save Shortcut triggered");
//   }
// });

// Ex - 3 => Moving a Box with Arrow keys

const Box = document.querySelector(".box");

let topPos = 100;
let leftPos = 100;

document.addEventListener("keydown", (e) => {
  console.log(e);
  const step = 10;
  if (e.key === "ArrowUp") topPos -= step;
  if (e.key === "ArrowDown") topPos += step;
  if (e.key === "ArrowLeft") leftPos -= step;
  if (e.key === "ArrowRight") leftPos += step;

  Box.style.top = topPos + "px";
  Box.style.left = leftPos + "px";
});

// Introduction to our Form events
// input
// change
// focus
// blur
// submit
