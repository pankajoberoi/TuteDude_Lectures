console.log("Hello guys!!!");

// const Status = document.getElementById("status");
// const btn = document.getElementById("fetchbtn");

// btn.addEventListener("click", () => {
//   Status.textContent = "Loading Data......";

//   setTimeout(() => {
//     Status.textContent = "Data Loaded succesfully";
//   }, 3000);
// });

// SetInterval -> digital clock?

// let Clock = document.getElementById("clock");

// setInterval(() => {
//   const now = new Date();
//   console.log(now);
//   Clock.textContent = now.toLocaleTimeString();
// }, 1000);

// H/W => you will create a stopWatch ->setInterval and clearInterval

//Slideshow
// const image = [
//   "https://images.unsplash.com/photo-1761165308046-174a56e73525?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
//   "https://images.unsplash.com/photo-1760681554364-50e8cf5efdb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
//   "https://images.unsplash.com/photo-1760527171635-b4f8186ddda9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
// ];

// let index = 0;
// let Banner = document.getElementById("banner");

// function changeImage() {
//   Banner.src = image[index];
//   index = (index + 1) % image.length;
// }

// changeImage();
// setInterval(changeImage, 3000);

// Typing Animation

// const message = "Welcome to Asyn Javascript,Welcome to Asyn Javascript";
// let output = document.getElementById("Text");
// let index = 0;

// function typeText() {
//   if (index < message.length) {
//     output.textContent += message.charAt(index);
//     index++;
//   }
//   setTimeout(typeText, 100);
// }

// typeText();

// clearInterval -> countDown timer

let timeLeft = 10;
const timer = document.getElementById("timer");

const countDown = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;

  if (timeLeft == 0) {
    clearInterval(countDown);
    alert("Time is Up");
  }
}, 1000);
