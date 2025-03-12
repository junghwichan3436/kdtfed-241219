const staggerWrap = document.querySelector("ul");

// 행과 열 정의
// const grid = [9,3];
// const col = grid[0];

// stagger() = 시차를 준다는 뜻

// 그라데이션 효과 같은 느낌
// z가 기본축이 된다. (깊이감)
const [col, row] = [9, 5];
console.log(col);
const allElem = col * row;
console.log(allElem);
//9행 5열을 만든게 아니라 그냥 숫자를 만든거같아

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}

const tl = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "x" }),
});

// tl.add({
//   scale: [
//     { value: 1, easing: "linear", duration: 500 },
//     { value: 0.5, easing: "linear", duration: 1200 },
//   ],
// }).add({
//   translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "x" }),
//   translateY: anime.stagger(10, { grid: [9, 5], from: "center", axis: "y" }),
//   rotate: anime.stagger([0, 180], { grid: [9, 5], from: "center", axis: "x" }),
// });
