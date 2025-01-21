// 나머지 연산자
// const x = 10;
// const y = 4;
// let result;

// result = x / y;
// console.log(result);

// result = x % y;
// console.log(result);

// 증감연산자
// let a = 10;

// console.log(a);

// a = ++a;

// console.log(a);

// a = --a;

// console.log(a);

// let x = 10;
// let y = 4;
// let result;
// 위에거 축약형
// let x = 10,
//   y = 4,
//   result;

// result = x + y--;

// console.log(result);

// console.log(y);
// 증감연산자가 p 앞에 붙으면 먼저처리하지만 p뒤에 붙으면 앞에있는 증감 연산자를 먼저 처리한다

// Garbage Collector = GC 안쓰는 변수를 쓰레기통으로 가져간다

// 현빈이라는 것을 데이터 영역에 넣었다
// const actor = "현빈";
// const movie = "하얼빈";

// 연결연산자
// const result = actor " 님은" + movie + "에 출연하였습니다!";
// const result = `${actor}님은 ${movie}에 출연하였습니다!`;

// console.log(result);

// let x = 3,
//   y = 3;

// 복합대입연산자
// y = x + 3; y += x; 두개가 같다
// 더하기
// y += x;
// 곱하기
// y *= x;
// 나머지를 구하는 연산자
// y %= x;
// console.log(y);

// 복합대입연산자
// let str = "<table border='1'>";
// str += "<tr>";
// str += "<td>1</td><td>2</td><td>3</td>";
// str += "</td>";
// str += "</table>";
// document.write(str);

// 얕은비교:타입은 비교하지않고 값만 비교한다
// console.log(3 == "3");
// 깊은비교:타입과 값을 모두 비교한다
// console.log(3 === "3");

// 느낌표는 부정의 의미
// console.log(3 != "3");
// console.log(3 !== "3");

// let a = 10,
// b = 20;

// console.log(a > 10 || b > 20);
// 둘중에 하나만 참이 나와도 참이나온다
// console.log(a <= 10 || b > 20);
// 앤드 연산자는 두가지 모두가 참이여야 한다
// console.log(a <= 10 && b > 20);

// 3항조건문
// let a = 10,
//   b = 3;

// true의 값 일 때는 자바스크립트 false의 값을 타입스크립트
// let result = a < b ? "Javascript" : "Typescript";
// console.log(result);
