console.log("hello mitron!");

// let eventButton = document.querySelector("#eventBtn");

// eventButton.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event.timeStamp);
//   console.log(event.clientX, event.clientY);

//   event.target.innerText = "Details in console";
// });

// let Name = document.querySelector("#name");

// Name.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

// let TrackArea = document.getElementById("trackarea");
// let Coords = document.getElementById("coords");

// TrackArea.addEventListener("mousemove", (e) => {
//   console.log(e);
//   Coords.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
// });

// Double click to add/remove

// let container = document.getElementById("container");
// let button = document.getElementById("addBox");

// button.addEventListener("click", () => {
//   const box = document.createElement("div");
//   box.className = "box";
//   box.style.cssText = `
//                     width:60px; height:60px;
//                     background:hsl(${Math.random() * 360},70%,60%);
//                     display:inline-block; margin:5px;`;
//   container.appendChild(box);
//   console.log("added");
//   box.addEventListener("dblclick", () => box.remove());
// });

// Word -> hover -> tooltip

const Word = document.getElementById("word");
const tooltip = document.createElement("span");
tooltip.textContent = "I am a ToolTip!";
tooltip.style.cssText =
  "position:absolute; background:black ; color:white; padding:5px; display:none";

document.body.appendChild(tooltip);

Word.addEventListener("mouseover", (e) => {
  tooltip.style.display = "block";
  tooltip.style.left = e.pageX + "px";
  tooltip.style.top = e.pageY + 20 + "px";
});

Word.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});
