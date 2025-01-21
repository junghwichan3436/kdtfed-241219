// 원시와 참조의 타입 정리
// 원시 타입 : 데이터에 공간에서 직빵으로 찾아온다
// let a = 10;
// let b = a;

// console.log(a, b);
// 객체영역이 바뀌면 변수영역 값도 바뀐다 그전사람이 검색했던 결과도 남이 있어서 다른 사람이 볼 수도 있다 그래서 값이 바뀌지 않게 해주는 함수
// 참조타입 :객체 영역에 있는 타입을 참조해온다
let obj1 = {
  c: 10,
  d: "ddd",
};

let obj3 = obj1;

console.log(obj3, obj1);
// console.log(obj1, obj2);

// b = 15;
// obj2.c = 20;

// console.log(a, b);

// console.log(obj1, obj2);

//변수를 값을 담을 수 있는 바구니 !!
// 단순히 이렇겜나 생각하면 안되지만..... 이라는 부분

//cs 컴퓨터 사이언스
// 피그마 => fff // 000
// 컴퓨터 => 사람이 입력한 데이터를 처리하는 방식 => 무조건 반드시 0,1 이라는 숫자만 가지고 데이터를 처리!!
//바이너리 코드
// 메모리공간 => 가장 최소단위 비트
// 고사양의 데이터를 처리하려면 너무 많은 비트를 사용해야 하다보니 컴퓨터 비효율적인 로딩 요구!!
// 비트단위를 조금더 큰 단위로 묶어 놓자 => 바이트 = 8개의 비트를 모아놓은 것

//변수 선언 => 숫자형 타입 값을 할당 했을 때 => 대략적으로 64비트의 값

// 객체, 배열
// 전통적인 프로그래밍언어 => 굳이 비효율적으로 낭비될수 있는 메모리공간을 생성하지 않기 위해서
// Java,C언어는 이터러블한 객체를 생성할 때, 애초에 해당 객체에 얼만클의 값을 넣을 지 르 그래서 정의!!!
//JS > 배열 =>5개 // 10개

//굉장히 타이트하게 기본값을 설정해놓고, 만약 그 ㅏ이트한 값을 초과해서 메모리 사용하고자 할 때마다 값을 추가 시켜주거나

// const arr = [1, 2, 3];

// 애초에 값을 굉장히 큰 범위로 만들어놓고, 개발자가 어떤 범위,용량의 값을 적용하더라도 문제가 없도록 하거나

//함수 :기능을 가지고 있는것

let user = {
  name: "David",
  gender: "male",
};

// let user02 = user;
// user02.name = "Jane";
// 유저네임도 제인으로 바뀌게 된다

//이걸 고치기
// 세탁기
function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}

const user02 = copyObject(user);
user02.name = "Jane";

console.log(user.name, user02.name);

//Spread Operator = 전개연산자 구문

// 참조타입변수
const fruits = ["apple", " banana", "cherry"];

// 얕은복사 원조 데이터와 두번째도 바뀐다
// const favorit = fruits;
//깊은복사 새로 창조한 데이터만 바뀌고 원조 데이터는 그대로 남아 있는다
const favorit = [...fruits];

// console.log(fruits, favorit);

favorit[1] = "grape";
console.log(fruits, favorit);
