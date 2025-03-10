const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 원을 만듭시다!
// 개발자가 매번 같은 도형을 만들때 같은 함수를 여러번 사용해야 할까?

// 만약, 개발자가 20개의 원을 만든다면, 우리는 arc함수를 사용해야할까?
// 그리고 그때마다 우리는 너비, 높이, 반지름, 색상을 매번 기입해야함

// *** => class 이럴때 (생성자) 함수가 필요한것이다.!!!

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.dx = Math.floor(Math.random() * 3) + 1;
  this.dy = Math.floor(Math.random() * 3) + 1;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  this.animate = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      // 원이 온전하게 유지 되면서 각 가장자리에 원이 짤리지 않도록 하는
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      // 원이 온전하게 유지 되면서 각 가장자리에 원이 짤리지 않도록 하는
      this.dy = -this.dy;
    }

    this.draw();
  };
}

/* 수동으로 만든 버전 일일히 하나씩 설정한것것
const circleOne = new Circle(100, 100, 50, "red");
const circleTwo = new Circle(200, 200, 50, "blue");

circleOne.draw();
circleTwo.draw();
*/

// 굳이 그럴필요가 있을까? 자동으로 할 방법이 없을까?
// x, y 의 중심축 , 반지름, 컬러 => 4개 값(1쌍이) 랜덤으로 필요함
// 내가 원하는 값 = 20개가 필요 > 20개를 반복문으로 창출 > 총 필요 인자값들  20쌍이 필요

// 그리고 나서 최종적으로 생성된 20쌍의 요소에 draw()라는 함수를 사용해서 그려줘야함
// 반복적인 행위 => draw() 활용해서 그림을 그리는 반복행위!

// 현재 20쌍의 값이 iterable 한 객체안에 담겨있어야, 각각의 아이템을 가져와서 draw()에 적용
// 왜 배열이어야 할까? 왜 객체여야 할까 의문을 가지고 있어야 함

const objs = [];
for (let i = 0; i < 20; i++) {
  // 화면의 전체지름의 범위를 감안한 계산식
  const radius = Math.floor(Math.random() * 50) + 10; //최소 0을 피하기 위해 10 부여, 정수로 변환(소수점없앰)
  //(가로, 세로) 양쪽의 제일 가에 원이 짤리지 않도록 (반지름을 온전히 보존)
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  objs.push(new Circle(x, y, radius, color));
}

// objs.forEach((obj, index) => {
//   objs[index].draw();
// });

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  objs.forEach((obj, i) => {
    objs[i].animate();
  });

  requestAnimationFrame(update);
};

update();
