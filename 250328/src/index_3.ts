// 타입가드

// type Person = {
//   name: string;
//   age: number;
// };

// const func = (value: number | string | Date | Person) => {
//   //value.toUpperCase(); 사용되어지지 못한다
//   //value.toFixed(); 사용되어지지 못한다
//   if (typeof value === "number") {
//     console.log(value.toFixed());
//   } else if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else if (value instanceof Date) {
//     //instanceof는 프로토타입객체 전용
//     // 프로토타입 객체자료를 확인하고 싶을 때만 instanceof를 쓸 수있다
//     //내장객체로 만들어진 요소만 쓸 수 있다
//     console.log(value.getFullYear());
//   } else if (value && "age" in value) {
//     console.log(`${value.name}은 ${value.age}살 입니다`);
//   }
// };
// func("value");
