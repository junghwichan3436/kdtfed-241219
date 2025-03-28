//변수 안에 담을 수 있는 값 => 자료형
// 자료형(두가지로 나누어 진다) 공간분할태그 inline과 block 같은 느낌
// 1)원시타입 = Primitive type
// number =숫자
// string = 문자열
// boolean = 논리형
// > Template Literal => 변수와 문자열을 동시에 사용하고자할 때, 굳이 번거롭게 연산자(+)를 사용하지 않을 수 있도록 만들어놓을 문법
// undefined = 미정
// > falsy한 값
// null = "유효하지 않다!!"라는 값을 갖고 있음
// > 아예 값을 주지 않은 것을 정의하려고 할 때
// simbol = 유일 무의 한 값

// 2) 참조타입 = Reference type
// array = 배열
// function = 함수
// object = 객체

//배열의 뿌리는 객체

// regexp = 정규표현식
// Map = 맴데이터
// Set =  셋데이터

// ----------------------원시 타입--------------------------

// 숫자
const num = 7;
// 따옴표는 문자로 인식해 문자열
const str = "7";
// 논리형
const bool = true;
const bool02 = false;
// 문자열
// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age);

// 논리형
console.log(typeof bool);
console.log(typeof bool02);

// 변수안에 다양한 타입으로 변수 만들기
const userName = "현빈";
const movieTitle = "하얼빈";

// const result =
//   userName + "배우가 출현한 최근 영화는 " + movieTitle + " 입니다 ";
// Templete literal 사용법
// ``을 입력하면 Template literal 변경 변수앞에 ${} 작성하고 따옴표 제거

const result = `${userName} 배우가 출현한 최근 영화는 ${movieTitle}  입니다`;

console.log(result);

// undefined  값이 미정

let hobby;

console.log(hobby);

// null

let weekend = null;
console.log(weekend);

// symbol 유일무의한 값을 생성할 때
//아이디가 같아도 다른걸로 인식한다
const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();

const member365 = {
  name: "Jack",
  [id]: "ezen",
};

console.log(member365);

// ------------------------------참조타입---------------------------

// Array (배열) 대괄호를 씀
// 대괄호는 배열이다
// 빨리 쓸 수 있다
// 순번에 맞는 값을 찾아올 수 있음 console.log(arr[2]);
const arr = [1, 2, 3];
const strArr = ["park", "kim", "lee"];
const boolArr = [true, false];

console.log(arr);
// 재사용성을 주기위한 작업
//arr은 legth의 속성을 가지고 있는 것이다
// indexof는 첫번째 값이 아니라 -1번째 값이 적용됨으로 + 1 을 해주어야한다
console.log(`${arr[0]}은 arr배열의 ${arr.indexOf(arr[0]) + 1}번째 값입니다.`);
console.log(typeof arr);

// 배열 값을 찾아오는 방법
// 언제든 숫자를 더 넣을 수 있다
arr[3] = 8;

// object 객체 중괄호를 씀
// 배열보다 더 많은 값을 가질 수 있음 객체는 배열의 뿌리이기 때문에
// 1,2,3의 정의를 내릴 수  있다
// 각각의 값마다 의미를 내릴 수 있다
//순번을 매긴다 배열의 갯수의 -1은 해당 배열의 마지막 값 (0부터 세기 때문에)

const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};
console.log(arr);

const frontendClass = {
  //객체의 형태는
  // key: value =>한 쌍의 property 부품적인 속성
  // html을 사용할 때 => a href => attribute 속성 본질적인 속성
  tutor: "David",
  students: 16,
  major: "language",
};

//  객체값을 찾아오는 방법
// 온점 표기법
console.log(frontendClass.tutor);
// 대괄호 표기법
console.log(frontendClass["students"]);

frontendClass.attitude = "the best";

console.log(frontendClass);

// function = 기능

//원래 초창기에 JS 함수 구현
//선언 & 호출!! 선언 한것
function hello() {
  console.log("Hello World!");
}
// 호출한것
console.log(typeof hello);
// hello();
