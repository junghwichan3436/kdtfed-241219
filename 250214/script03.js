//사용자에게 지름 & 높이의 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요!!!

//원기둥의 부피를 구하는 공식 = 밑면적 x 높이
//밑면적 = Math.PI * R * R
// Radius = 반지름

//어떤 원기둥을 예상하더라도 해당 결과값이 출력될수 있도록 생성자 함수를 활용해서 코드를 구현

// const diameter = document.querySelector("#cyl-diameter");
// const height = document.querySelector("#cyl-height");

// const Radius = diameter / 2;

// const Basearea = function () {
//   return Math.PI(Radius * Radius);
// };

// const cylindervolume = function () {
//   Basearea * height;
// };

// Basearea();
// cylindervolume();

// console.log(cylindervolume);

// 생성자함수를 잘 사용하려면, 왜 생성자 함수를 사용해야하는가에 대한 질문의 답을 알수 있어야함

// 생성자함수는 왜 사용하는가? 반복적인 패턴의 객체를 보다 효율적으로 만들어내기 위한 목적!

// 객체 만들기 => 정적인 속성값 관리 & 사용자의 요구사항에 따른 메서드 함수도 자유롭게 만들수 있다는 것을 의미 !
// 1타 2피

// 버튼을 눌렀을 때 지름 과 높이 의 값을 가져오라는 이벤트
const button = document.querySelector("input[type='button']");
const result = document.querySelector("#result");

// 생성자함수
function Cylinder(cylinderDiameter, cylinderheight) {
  this.diameter = cylinderDiameter;
  this.height = cylinderheight;
  this.getVolume = function () {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFIxed(2);
  };
}

//  class로 바꾸기
class Cylinder {
  constructor(cylinderDiameter, cylinderheight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderheight;
  }
  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  // 속성값은 사용하지않지만 클릭은 할 수 있따
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이값을 입력하세요!";
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height)); //???????????
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
  }
});
