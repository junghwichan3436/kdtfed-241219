const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");
const canvasOffsetY = canvas.offsetTop;
// console.log(toolbar);

canvas.width = window.innerWidth;
canvas.height = window.innerWidth - toolbar.offsetHeight; //상단블랙 바를 제외한 전부에게 height값을 넣어 주겠다

const ctx = canvas.getContext("2d");

let isDrawing = false; //그림이 두번 그려질 수 있기 때문에 false
let startX;
let startY;
let lineWidth = 2;
// 사용자가 선택한 색상값을 넣어주겠다
toolbar.addEventListener("change", (e) => {
  console.log(e, e.target, e.target.id);
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
});

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
  // console.log(startX, startY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.beginPath();
});
