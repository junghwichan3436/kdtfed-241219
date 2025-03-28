//함수 매개변수
// const hello = (fuck, message) => {
//   console.log(`${fuck}님, ${message}`);
// };

// hello("슛돌이", "반갑습니다");

//함수 매개변수 -2
//기본 매개변수 값 정의!!
// const hello01 = (fuck, message = "안녕하세요") => {
//   console.log(`${fuck}님, ${message}`);
// };

// hello("슛돌이");

//함수 매개변수 정의 -3
//나머지 매개변수 정의방법 => ...변수명
// const addNum = (a, b = 2) => {
//   const result = a + b;
//   return console.log(result);
// };
const addNum = (...numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return console.log(sum);
};

addNum(1);
addNum(1, 3);
addNum(1, 2, 3, 4, 5);

//전개연산자 구문 사용법!!
//전개연산자 구문이 함수의 매개변수에서 사용되면 나머지 매개변수라고 특정한 명칭을 갖게 됨!
// 원본데이터를 복사하고 싶을때 사용한다 원본데이터와 사본데이터를 분리하고 싶을때

// const animal = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

// console.log(animal.concat(fruits));
// console.log(...animal, ...fruits);

// //전개연산자 구문 사용법 -2
// const mine = fruits;
// console.log(mine, fruits);

// mine[1] = "orange";
// console.log(mine, fruits);

const mine = [...fruits];
console.log(mine, fruits);

mine[1] = "orange";
console.log(mine, fruits);

//객체 프로퍼티 값추가 -1
//객체 내 프로퍼티 값을 추가하고 싶을때, 온점표기법 & 대괄호 표기법이 있다
const book = {
  title: "Javascript",
  pages: 500,
};

//온점 표기법
console.log(book);
book.published = "2025-03";
book.pages = 600;

// 대괄호표기법
book["author"] = "David";
console.log(book);

// ---------------------------------------
//객체 프로퍼티 값추가 -2
//계산된 프로퍼티 값을 추가하는 방법
const add02 = (a, b) => {
  return a + b;
  d;
};

const fn = () => {
  return "result";
};
const obj = {
  [fn()]: "함수 키",
  [`${add02(10, 20)}key `]: "계산식 키",
};
console.log(obj);

// -------------------------------------------
// 객체 프로퍼티 시리즈 -3
// 객체 내 프로퍼티를 단축해서 사용하고자 할때

const user = {
  name: "David",
};

user.age = 20;
console.log(user);

const makeUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const user1 = makeUser("Sophia", 30);
console.log(user1);

//객체에서 심벌 키 사용
//심벌 => 유일무이한 값을 생성 및 관리 ,사용하고자 할 때 생성하는 자료구조 형태중 하나
///심벌을 생성하는 방법

const mySymbol1 = Symbol("휘찬");
const mySymbol2 = Symbol("휘찬");

console.log(mySymbol1 === mySymbol2);
console.log(mySymbol1);
console.log(mySymbol2);
// 심볼을 유일무의한 값을 생성하기 때문에 절대 같을 수 없다
//library 를 만들 때 사용된다

//심볼을 생성하는 또 다른 방법 => 전역 심볼 레지스트리에 저장하는 방법

//아무리 유일무의한 심볼 값이 장점이라고 하지만, 심볼간 값을 공유하거나 논리적으로 비교해야하는 상황이 발생되는 경우에는 전역
// 심볼을 생성하는 또 다른 방법
// Symbol()은 고유한 값을 가지고 있는 심볼을 생성후 반환 하지만, Symbol.for()는 전역적으로 존재하는 global symbol table (*전역 심볼 레지스트리)에 저장 및 데이터를 찾아오는 역할!!

const s1 = Symbol.for("foo");
const s2 = Symbol.for("foo");
// 뒤에 값이 맞냐 안맞냐에따라 true 와 false를 반납한다
// foo => Token String

console.log(s1 === s2);

const token = Symbol.for("tokenString"); //생성
console.log(Symbol.keyFor(token) === "tokenString"); // 찾아오고자 할때
// Symbol.for 으로 생성한 변수를 찾아 올때는 Symbol.keyFor 을 사용해서 찾아온다

//심볼을 생성하는 일반적인 방법

const obj01 = {};
const v = "my";

obj01[v] = "myProps";
obj01[123] = 123;
obj01["props" + 123] = false;
console.log(obj01);
// 변수의 값을 넣을 때는 대괄호표기법 사용!!!!!

const obj02 = {};

const mySymbol3 = Symbol("mySymbol");
const mySymbol4 = Symbol("mySymbol");

obj02[mySymbol3] = 123;
obj02[mySymbol4] = 456;

console.log(obj02 === obj02); // ????

//사용자 회원가입시, 동명이인의 사용자를 독립적인 개체로 구분지어서 관리하고자 할때 Symbol()을 이용하는 방법

// 제주 : 이효리
// 서울 : 이효리

//Class 선언 시, Symbol()을 이용하는 방법

const count = Symbol();
//클래스
class Counter {
  constructor() {
    this[count] = 0;
  }

  add() {
    return this[count]++;
  }

  get() {
    return this[count];
  }
}
//인스턴스
const test1 = new Counter();
console.log(test1.get());

class BetterCounter extends Counter {
  count() {
    return console.log("test");
  }
}

const test2 = new BetterCounter();
console.log(test2);
console.log(test2.count());
