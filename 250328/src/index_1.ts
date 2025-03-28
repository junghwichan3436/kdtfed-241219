// let a; //값을 추론하지 않는  다면 any 타입이 된다
//let a = 1; // 타입 추론이라고 부른다
//let a: 1 = 1; // 리터럴타입 1 만 들어올 수 있다
//const a = 1; //상수화 시킨다 위에랑 같다

// let a: number | string | boolean; // a는 number 혹은 string을 모두 가져올 수 있다

// a = 1;
// a = "hello";
// a = true;

//let arr: (number | string | boolean)[] = [1, "hello", true];/
//유니온 타입이다 배열의 타입을 정의할 때 많이 사용된다

//type Dog = {
// name: string;
// color: string;
// };

//type Person = {/
//  name: string;
//language: string;
//};
// type Union1 = Dog | Person;
// type Intersection = Dog & Person;

// let intersection: Intersection = {
//   name: "",
//   color: "",
//   language: "", //하나라도 빠지는 순간 교집합이 될 수 없기 때문에 에러가 뜬다
// };

// let union1: Union1 = {
//   name: "",
//   color: "",
// };

// let union2: Union1 = {
//   name: "",
//   language: "",
// };

// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: "",
// };

// type Union2 = {
//   name: string;
// };

// let union4: Union2 = {
//   name: "",
// };

// union4 = union3;
// // union3 = union4;

// let variable: number & string;
//never 타입 이 나온다 number와 string이 같을 수는 없기 때문에
