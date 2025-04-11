// type A = number extends string ? number : string;
// //typescript에서 사망조건 연산자를 사용가능
// // extends 각자형제 요소에서는 사용불가

// type ObjA = {
//   a: number;
// };

// type ObjB = {
//   a: number;
//   b: number;
// };

// type B = ObjB extends ObjA ? number : string;
// //제네릭과 연결시키기 (제네릭 조건부타입)
// type StringNumber<T> = T extends number ? string : number;

// let varA: StringNumber<number>;
// let varB: StringNumber<string>;

// function removeSpaces<T>(text: T): T extends string ? string : undefined;
// //상속의 개념과 확장의 개념이 같다
// //땅을 상속받으면 나의 재산이 확장 된다

// //현시점에서는 아닌데 미래에는 이런 타입이 될거야 는 타입단언이다
// function removeSpaces(text: any) {
//   if (typeof text === "string") {
//     return text.replaceAll(" ", ""); //어떤 값이 들어올지 미정이고 미래에 올 값이 어떤 타입이 될지 모르기 대문에  타입단언을 any로 준다
//   } else {
//     return undefined;
//   }
// }

// let result = removeSpaces("hi im david");

// result.toLowerCase();

// 분산적 조건부타입
//두번 계산을 하기 때문에 그렇다
type StringNumber<T> = T extends number ? string : number;
let c: StringNumber<number | string>;
