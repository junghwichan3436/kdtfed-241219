const canvas = document.querySelector("canvas");
console.log(canvas);

const ctx = canvas.getContext("2d");

// ctx.font = "60px Arial";
// ctx.fillText("Hello", 50, 70);
// ctx.strokeText("HELLO", 50, 150);

// ctx.font = "italic 60px Arial";
// ctx.fillText("Javascript", 50, 70);

// ctx.font = "Bold 60px Arial"; //font 가 들어오면서 위쪽에 있던 스타일이 영향을 주지 못한다
// ctx.fillText("Typescript", 50, 150);

// const img = new Image(); //클래스로 만들어진 프로토타입
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 100, 50, 200, 350, 160, 100, 200, 350);
// });
// img.src = "./images/cat.jpg";
// // drawImage(그릴이미지,x좌표,y좌표)

//masking : 서로 다른 요소들을 혼합되지 않도록 별개의 요소로 관리하기 위해서 조치하는 행위

//cliping mask : 서로다른 복수의 이미지 요소들을 원하는 좌표에 혼합해서 사용할 수 있도록 하는 행위.기능

// const img = new Image();
// img.onload = () => {
//   ctx.drawImage(img, 0, 0);
// };

// img.src = "./images/bird.jpg";

// ctx.beginPath();
// ctx.arc(400, 200, 150, 0, Math.PI * 2, false);
// ctx.clip();

// globalAlpa = "value";

// ctx.globalAlpha = 0.3; //공통적인 투명도를 0.3으로 주겠다라는 뜻

// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0,255,255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0,255,0)";
// ctx.fillRect(250, 50, 100, 50);

// 개별적인형태로 투명도를 준다

// ctx.fillStyle = "rgba(0,0,255,0.2)";
// ctx.fillRect(50, 50, 60, 50);

// ctx.fillStyle = "rgba(0,0,255,0.4)";
// ctx.fillRect(110, 50, 60, 50);

// ctx.fillStyle = "rgba(0,0,255,0.6)";
// ctx.fillRect(170, 50, 60, 50);

// ctx.fillStyle = "rgba(0,0,255,0.8)";
// ctx.fillRect(230, 50, 60, 50);

// ctx.fillStyle = "rgba(0,0,255,1)";
// ctx.fillRect(290, 50, 60, 50);

//gradient 컬러 적용하기
//creatLinearGradient(x1,y1,x2,y2)
//addColorStop(position,color)
//두가지를 보통 같이 쓴다
//사각 그라디언트
// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// 원형 그라디언트
//첫번째원 // 두번째원

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 15;
ctx.shadowBlur = 15;
ctx.shadow = 15;

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "#fff");
radGrad.addColorStop(0.4, "#ff0");
radGrad.addColorStop(1, "#0ff");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);

ctx.fill();

// 패턴만들기 !!

// const img = new Image();

// img.src = "./imges/pattern.png";
// img.addEventListener("load",() => {

// })
// img.onload= () ={

// }

// img.onload = function () {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// };

// img.src = "./imges/pattern.png";

//canvas ApI를 활용해서 선을 그린다고 했을 떄, 선의 마감처리는 총 3가지중 하나로 선택할 수 있음!

//butt : 기본 디자인 => 단면처리
//round : 선 너비 = 두께의 1/2만큼을 반지름으로 하는 원을 선 양쪽에 붙여넣는다!!
// square : 선 너비의 1/2만큼을 양쪽끝에 붙여넣는다.

// const lineCap = ["butt", "round", "square"];
// const linJoin = ["bevel", "miter", "round"];

// ctx.strokeStyle = "#222";

// lineCap.forEach((line, index) => {
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + index * 30);
//   ctx.lineTo(150, 50 + index * 30);
// });
// ctx.stroke();

// lineCap.forEach((line, index) => {
//   ctx.beginPath();
//   ctx.lineWidth = 20;
//   // ctx.lineCap = lineCap[index]; //lineCap이라는 속성을 통해 바꿀 수 있다
//   ctx.lineJoin = linJoin[index];
//   ctx.moveTo(60, 60 * index + 50);
//   ctx.lineTo(100, 60 * index + 15);
//   ctx.lineTo(140, 60 * index + 50);
//   ctx.stroke();
// });
