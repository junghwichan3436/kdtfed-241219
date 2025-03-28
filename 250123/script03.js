// 내장함수
//자바스크립트가 내장하고 있는 함수
//시간과 관련된 자바스크립트의 내장 함수 시리즈

//일정 시간마다 반복하는 함수 = setInterval()
// 3초에 한번씩 실행됨
// const hello = () => {
//   console.log("Hello World!");
// };
// setInterval(hello, 3000);

// 아래위에 같은말

// setInterval(() => {
//   console.log("Hello World!");
// }, 3000);

//밀리초 => 1초 1000밀리초

//반보적인 실행을 멈추게하는 함수  =clearInterval

// let timer = setInterval(() => {
//   console.log("Hello World!");
// }, 2000);

// console.log(timer);
// ----------
// let counter;

// let timer = setInterval(() => {
//   console.log("Hello World!");
//   counter++;

//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

//특정시간 경과 후 무언가를 실행시키게 하는 함수  = setTimeout()

setTimeout(() => {
  console.log("안녕하세요!");
}, 3000);
