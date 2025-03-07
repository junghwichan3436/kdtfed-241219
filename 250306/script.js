const canvas = document.querySelector("canvas");
console.log(canvas);

canvas.width = window.innerWidth; //넓이값을 윈도우 전체로 주어서 화면이 꽉찬다
canvas.height = window.innerHeight; //높이값을 윈도우 전체로 주어서 화면이 꽉찬다

// 2d형식의 그림을 그릴수 있게 랜더링한 ctx
const ctx = canvas.getContext("2d");
// canvas.getContext();
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.strokeStyle = "#fff";
ctx.fillRect(10, 10, 50, 110); // (왼쪽에서부터얼마떨어짐,오른쪽에서부터얼마떨어짐,width,height)
ctx.strokeRect(10, 10, 50, 110);
// ctx.clearRect(10, 10, 50, 50);

// 환경요소를 얹힌다 기본으로 2d를 얹힌다
// canvas도화지를 깐다
//canvas 에 getcontext안에 2d로 해주면
//인스턴스객체가 그림을 그릴수 있게 해주는 모든 요소를 가지고 있다

//canvas 초기화!!
//context 생성하기!!
//canvas 위에 그림을 그리기 위한 환경요소들의 실체 혹은 집합체
//문맥, 맥락 , 목차 등등 사전적 정의
//각도 개녕!! = 도씨 사용불가 !!! & 호도법!!!

//사각형 그리기가 가장 쉽다
//내장 함수 및 속성이 지원된다
// fillRect = Rect Rectangle의 약자
// fillRect(x, y, width, height);
// strokeRect(x, y, width, height);
// clearRect(x, y, width, height); // :어떤x 와y값으로 지울 것인지

// fillStyle ="색상"
// strokeStyle ="색상"

// 1)사각형 그리기
// ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.strokeStyle = "#000";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(50, 50, 120, 120);

// ctx.clearRect(70, 80, 80, 45);

// 2)삼각형그리기
// 지금부터 그림을 그릴거야! 선언 => beginPath() 경로의 시작을 알린다
// 직선경로를 설정 할때 => lineTo(x,y)
// 설정한 직선경로를 그리고 싶을 때 => stroke()
// 설정 및 그린 직선경로들을 활용해서 어떤 도형이 생성되었을 때, 그안에 어떤 도형이 생성되었을때, 그 안에 색상을 넣고자 한다면 => fill()
// 현재 그림을 그리고 있는 위치에서 경로를 이동하고자 할 때, moveTo (x,y)
//   현재 작업중인 그리기가 끝났다! 선언 => closePath()
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(40, 40);
ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
ctx.closePath();
ctx.stroke();
// 마지막 선을 그려주지 않아도 closePath()를 하면 마지막 지점과 첫 지점을 이어준다!!

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// // ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// // ctx.lineTo(150, 100);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "rgb(0,200,0)";
// ctx.fill();

// 3)원 및 호 만들기
// 아치형 구조 => arch
// arc(x,y,r,startAngle, endAngle, counterClockWise = true =반시계방향)

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "#ff0";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI, true);
// ctx.arc(120, 100, 50, 0, Math.PI, false);
// ctx.stroke();
// ctx.fillStyle = "#f00";
// ctx.fill();

// 원의 반
ctx.beginPath();
ctx.arc(120, 200, 50, Math.PI * 0.5, Math.PI * 1.5, false);
ctx.closePath();
ctx.stroke();

// 원의 호
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI / 3, false);
// ctx.stroke();

ctx.beginPath();
ctx.arc(500, 500, 30, Math.PI, 0 / 3, false);
ctx.stroke();

// 타원 그리기
//타원의 각도 의 따라 달라진다
// ellipse(
//   x,
//   y,
//   radiusX,
//   radiusY,
//   rotation,
//   startAngle,
//   endAngle,
//   counterClockWise
// );

ctx.beginPath();
ctx.ellipse(200, 70, 80, 20, 0, 0, Math.PI * 2);

ctx.strokeStyle = "#f00";
ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, Math.PI / -6, 0, Math.PI * 2);
// ctx.stroke();
// ctx.strokeStyle = "#00f";
// ctx.stroke();

// 꼼수로 타원만들기
// ctx.beginPath();
// ctx.save();
// ctx.scale(1, 0.7); //넓이는 100%를 쓰고 높이값은 70%만 쓰겠따
// ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
// ctx.stroke();
// ctx.restore();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
// ctx.stroke();

// save() 특정구간을 저장해놓겠다
// restore() 저장해놓은 공간을 빠져나오겠따

// 5)곡선 그리기
//TTF : 2차 베지에 // OTF : 3차 베지에
//2차 베지에: quadraticCurvTo()
//3차 베지에: bezierCurveTo(첫번째 x조절점, 첫번째 Y조절점,두번째 x조절점, 두번째 y 조절점 ,최종 종착점x, 최종 종착점y)

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200); //(중간지점 x,중간지점 y,마지막지점 x,마지막지점 y)
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// // 3차 베지에
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.stroke();

// 6)특정 경로값을 저장해놓고 가져와서 사용하고자 할때!
//new Path2D()

// const triangle = new Path2D(); //triangle path2D의 인스턴스 객체이다
//인스턴스객체     //프로토 타입
// triangle.moveTo(100, 100);
// triangle.lineTo(300, 100);
// triangle.lineTo(200, 260);
// triangle.closePath();

// const circle = new Path2D();
// circle.arc(200, 155, 50, 0, Math.PI * 2);

// ctx.stroke(triangle); //인자값으로 받을수 있다

// ctx.fillStyle = "#0f0";
// ctx.fill(circle);
