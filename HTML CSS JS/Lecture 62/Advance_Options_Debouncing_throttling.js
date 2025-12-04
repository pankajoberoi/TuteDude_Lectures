console.log("Hello Mitron!!!");

// let element;

// element.addEventListner("click",handler ,{
//     capture:false,
//     once:false,
//     passive:false
// })

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent captured..");
//   },
//   { capture: false }
// );

// child.addEventListener("click", () => {
//   console.log("Child clicked...");
// });

// const btn = document.getElementById("btn");

// btn.addEventListener(
//   "click",
//   () => {
//     alert("Clicked only once!!");
//   },
//   { once: true }
// );

// passive option

// i wont call preventDefault() in this handler

// const box = document.getElementById("scrollBox");

// box.addEventListener(
//   "scroll",
//   (e) => {
//     e.preventDefault();
//     console.log("scrolling......");
//   },
//   { passive: true }
// );

// =======================================================================
// performance optimization

// const box = document.getElementById("scrollBox");

// box.addEventListener(
//   "scroll",
//   (e) => {
//     console.log("scrolling......");
//   },
//   { passive: true }
// );

// window.addEventListener("resize", () => {
//   console.log("resizing..");
// });

// let searchBox = document.getElementById("search");

// fn(p) 0.2 clear 0
// fn(pa) 0 -> 0.3 -> clear ->0
// fn(pan) 0 -> 0.5 -> searching for pan -> 0
// fn(pank) 0
// fn(panka)
// fn(pankaj)

// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer); // closures
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// function handleSearch(event) {
//   console.log("auto suggestion Searching for : ", event.target.value);
// }

// const debounceSearch = debounce(handleSearch, 500);

// searchBox.addEventListener("input", debounceSearch);

let Box = document.getElementById("box");

function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) {
      fn(...args);
      last = now;
    }
  };
}

Box.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scrolling event triggered..");
  }, 500)
);
