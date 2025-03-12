const staggerWrap = document.querySelector("ul");
// console.log(staggerWrap);
const [col, row] = [9, 3]; //행이 가로 열이 세로 9행 3열
const allElem = col * row;
// console.log(col, row);
for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 2], { grid: [9, 3], from: "center", axis: "x" }),
});
