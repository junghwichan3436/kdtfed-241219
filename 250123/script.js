//함수
//선언 & 호출이 있어야한다
//function 함수의 선언식 code 라는 이름의 함수를 선언한 것
// function code( {

// })
//{}안에 있는 것은 실행문이다
// function code( {

// })
// 함수를 선언했다 라고 한다
// function code( {
//   console.log ("오늘은 목요일입니다!!");
// })

// function code() {
//   console.log ("오늘은 목요일입니다!!");
// }
// 어떠한 텍스트가 나오고 뒤에 소괄호가 나오면 함수이다
//함수를 실행할 거야 라는 뜻 콘솔창에 뜨게하는 법
// code(); = 함수

// const obj = {
//   title: "자바스크립트",
//   fnc: function () {
//     console.log("자바스크립트 짱");
//   },
// };
// obj.fnc() = 메서드 함수
// fnc 를 찾아온다
//객체안에 있는 키에 할당 되어진 함수 = 메서드 함수

// 더하기함수
// let calcSum = [1,2,3,4,5,6,7,8,9,10];

// function calcSum() {
//   for (let i = 1; i<= 10, i++ ) {

//   }
// }

// calcSum()

// 함수를 선언하고 호출했다 1부터 100까지 더하기
// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 100; i++) {
//     sum += i;
//   }
//   console.log(`1부터 100까지더하면 ${sum} 입니다.`);
// }
// calcSum();

//스키장을 가는 데 여자 때문에 갔다 (그럼 내가 스키장을 가는데 매개채가 된것이다
// 그것을 맥의 변수라고 부른다)

// 맥의 변수(함수의 이름 뒤에서 선언한다)
//사용자가 두개의 숫자를 준 것을 계산하기
//a와b는 맥의 변수의 자리에서 나온다
// function sum() {
//   const result = a + b;
//   console.log(result);
// }

// sum();
// ---------------------------------------------
// 매개변수는 선언부에서 쓰여진다
// function sum(a,b) {
//   const result = a + b;
//   console.log(result);
// }
// sum에 들어가는 것을 인자값이라고 부른다
//인수값을 주어야지만 a,b에 값이 들어간다
// sum(10,20);
// ---------------------------------------------
// function calcSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   console.log(`1부터 20까지더하면 ${sum} 입니다.`);
// }
// calcSum(20);
// ---------------------------------------------
// 매개변수를 밖에서도 쓸려면 반환을 해주어야한다
//반환 =>
// function calcSum(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
// 반환값
//   return sum;
// }
// ${calcSum(20)}이건 함수지만 변수를 반환하기 때문에 들어올 수 있다
// 템이터럴은 문자와 변수를 합치는것

// console.log(`1부터 10까지 더하면 ${calcSum(20)}`);
// -----------------------------------------------------

// 사용자가 직접 값을 넣을 수 있어서 재활용성을 갖게 되었다!!
// const num = parent(prompt("더하고 싶은 숫자를 입력하세요!"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}`);
// ---------------------------------------------
// 값을 쓰지 않은 곳에는 undefined가 들어온다
// function multiple(a, b, c) {
//   return a + b + c;
// }

// console.log(multiple(2, 4, 8));
// console.log(multiple(2, 4));

// 기본매개변수
//값을 주지 않는 다면 매개변수 옆에 값을 넣어준다
// function multiple(a, b = 0, c = 0) {
//   return a + b + c;
// }

// console.log(multiple(2, 4, 8));
// console.log(multiple(2, 4));
// console.log(multiple(2));

// ---------------------------------------------

// break point 오류 해결법
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더한 결과값은 ${sum}입니다.`);
// }

// calcSum(10);

// ---------------------------------------------

// 전역 변수
// Scope = 범위 = 전국 방송이다
//전역 스코프 = global scope
// 전역스코프 사용사례 1
// var hi = "hello";

// function greeting() {
//   console.log(hi);
// }

// greeting();

// 전역스코프 사용사례 2
// 같은 전역변수다
// var hi = "hello";

// function greeting() {
//   hi = "bye";
//   console.log(hi);
// }
// greeting();

// 전역스코프 사용사례 3
// 위험 자주사용 x
// function greeting() {
//   hi = "hello";
// }

// greeting();
// console.log(hi);

// var를 사용하거나 혹은 어떤 키워드도 존재하지 않는 경우 전역에서 사용가능한
// 변수가된다 => 함수 내부에서도 사용가능!!

// ---------------------------------------------
//블록 스코프
const factor = 5;

function calc() {
  return num * factor;
}

const num = 10;
let result = calc();
console.log(`result : ${result}`);
// ---------------------------------------------
// const 와 let을 block local script global안에 있을 수있다
//(let i = 1; i <= n; i++) i는 block 변수
//  let sum = 0; let 은  local 변수
// const num = 5; script 변수
// var로 변수 선언을 하면 윈도우로 들어가서 global 변수
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const num = 5;

// console.log(`1부터 ${num}까지 더한 결과값은 ${calcSum(sum)}입니다.`);
