//반복문 &배열
//문자열 => 장규표현식 => 배열
//문자열 => 유사배열
//legth & index

const str = "Hello, everyone";
//1)문자열을 배열로 변환하는 방법
// console.log(str.split(""));
console.log(str.split(""));
//2)문자열을 배열로 변환하는 방법
// console.log([...str]);
console.log([...str]);

// 전개연산자를 활용해 문자열에있는 값을 배열에 넣게 해주고 쪼개주라
//마치 split과 같지만 전개연산자를 활용하는게 더 편하다

// 유사배열은 filter라는 함수를 쓸 수 가 없다!!!!!
//3)문자열을 배열로 변환하는 방법
// Array.from(str);
// console.log(Array.from(str));
