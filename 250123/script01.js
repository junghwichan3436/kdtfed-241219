//함수 선언식
// 할아버지
// function sum(a, b) {
//   return a + b;
// }

// sum(10, 20);
// 아빠
/* 익명함수 표현식 */
// 이함수의 이름은 num 이 된다
// const num = function (a, b) {
//   return a + b;
// };
// 그래서 num을 실행시킨다
// console.log(num(10, 20));
// 나
// 최신식
//화살표 함수 표현식
// const num01 = (a, b) => {
//   return a + b;
// };

// console.log(num01(10, 20));
// ---------------------------------------------
//선언 & 호출 x => 선언 즉시실행

// function(a,b) {
//   let result = a + b;
//   console.log(`함수 실행결과값 : ${result}`);
// }
// 위에걸 아래로
// 즉시실행함수
// 익명함수에다가 소괄호를 넣고 매개변수 넣는다
// (function(a,b) {
//   let result = a + b;
//   console.log(`함수 실행결과값 : ${result}`);
// }(100,200));
// --------------------------------------------------
// const hi = () => {
//   return "안녕하세요!";
// };
// 줄여서 이렇게 가능하다
// const hi = () =>  "안녕하세요!";
// --------------------------------------------------
//call(*호출)의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수(*콜백함수)
// 버튼이라는 태그를 가져와서 질문하라
// const btn = document.querySelector("button");
// addEventListener btn의 메소드함수 display는 addEventListener
// btn.addEventListener("click", function display() {
//   alert("클릭했습니다");
// });
// 콜백 지옥
// btn.addEventListener("click", () => {
//   console.log("클릭");
//   return () => {
//     console.log("클릭클릭");
//     return () => {
//       console.log("클릭클릭클릭");
//       return () => {
//         console.log("이제그만");
//       };
//     };
//   };
// });

// 콜백함수
// const showData = (name, age) => {
//   alert(`안녕하세요! ${name}님! 나이가 ${age}살 이시군요`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData)

//자바스크립트 언어 특징 => 함수 다이내믹 하다
//자바스크립트의 함수는 1급 시민 이라고 불린다
//이런 특징을 다 허용하는 프로그램은 흔치 않다!!!!
// 1.변수에 함수를 담을 수 있음 : 원래는 전통적으로 함수 선언식으로만 함수를 호출했었는데, 익명함수가 등장하면서 함수를 보다 편리하게 작성할 수 있게 됨

// 2.다른함수의 매개변수로 등장할 수 있음 :
// 콜백함수라는 스타일 형식을 창조해낼 수 있게 됨

// 3.다른 함수의 반환값으로 (return)값으로 함수가 등장할 수 있음
