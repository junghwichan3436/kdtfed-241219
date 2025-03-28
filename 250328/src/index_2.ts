// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person = {} as Person;
// person.name = "";
// person.age = 20;

// type Dog = {
//   name: string;
//   color: string;
// };

// // type DogNew = {
// //   name: string;
// //   color: string;
// //   breed: string;
// // };

// let dog: Dog = {
//   name: "돌돌이",
//   color: "brown",
//  breed: "진도", //초과프로퍼티검사에 걸린다
// };

// let dogAI :DogNew ={
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// }

// //슈퍼프로퍼티 검사를 우회해서 넘어간 케이스
// //슈퍼타입 & 서브타입
// //업캐스팅 & 다운 캐스팅
// let dogNew: Dog = dogAI

// ---------------------
// 타입 단원

// type Person = {
//   name: string;
//   age: number;
// };

// let person: Person = {} as Person;
// person.name = "";
// person.age = 20;

// type Dog = {
//   name: string;
//   color: string;
// };

// // type DogNew = {
// //   name: string;
// //   color: string;
// //   breed: string;
// // };

// let dog: Dog = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도", //초과프로퍼티검사에 걸린다
// } as Dog; //타입 단원

// // let dogAI :DogNew ={
// //   name: "돌돌이",
// //   color: "brown",
// //   breed: "진도",
// // }

// // //슈퍼프로퍼티 검사를 우회해서 넘어간 케이스
// // //슈퍼타입 & 서브타입
// // //업캐스팅 & 다운 캐스팅
// // let dogNew: Dog = dogAI

// //타입단원--------------------------------------------
// let num1 = 10 as never;
// // num1 = 20;
// let num2 = 10 as unknown;
// num2 = "hello";

// //let num3 = 10 as string; //같은 형제 끼리는 타입 단원이 될 수 없다
// //서로소 타입이기때문에 같은 교집합에 들어갈수 없다

// //다중단언
// //let num3 = 10 as unknown as string; // 꼼수를 썻다
// //언노운을 갔다가 다시 스트링을 간다

// // 리터럴 타입
// // let num4: 10 = 10;
// // const num4 = 10;

// // const단언 이런 것 도 있다
// let num4 = 10 as const;

// // -----------------------------------------
// // Non Null 단언
// type Post = {
//   title: string;
//   author?: string;
// };

// let post: Post = {
//   title: "게시글1",
// };

// const len: number = post.author!.length; //문자열이 들어올수 있지만 아직 값이 들어오지 않은 undefinde도 쓸수 있다 느낌표를 써줌으로써
