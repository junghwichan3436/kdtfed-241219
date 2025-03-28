//mouseover event
//

// let o = 0;
// const overoutOut = document.querySelector("div.out.overout");
// console.log(overoutOut);
// overoutOut.addEventListener("mouseover", function () {
//   const pItems = this.querySelectorAll("p");
//   pItems[0].innerText = "mouseover";
//   pItems[3].innerText = ++o;
// });

// const overoutIn = document.querySelector("div.in.overout");
// overoutIn.addEventListener("mouseover", function () {
//   const pItems = this.querySelectorAll("p");
//   pItems[0].innerText = "mouseover";
//   pItems[1].innerText = ++o;
// });

//mouse enter
let o = 0;
const enterleaveOut = document.querySelector("div.out.enterleaveOut");
enterleaveOut.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[3].innerText = ++e;
});

const enterleaveIn = document.querySelector("div.in.enterleaveIn");
enterleaveIn.addEventListener("mouseenter", function () {
  const pItems = this.querySelectorAll("p");
  pItems[0].innerText = "mouseenter";
  pItems[1].innerText = ++e;
});
