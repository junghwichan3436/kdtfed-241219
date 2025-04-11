//타입 변수가 2개 필요한 경우
// 들어가는 값과 나오는 값이 달라야한다!!

//존나어려워 이거 뭔 말이야~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const swap = <T, O>(a: T, b: O): (T | O)[] => {
//   return [b, a];
// };

// const swapItem = swap("1", 2);
// console.log(swapItem);

// const [a, b] = swap("1", 2);
// console.log(a, b);

// -----------------------------------------------------

// const returnFirstValue = <T>(data: T[]) => {
//   //인덱스값을 써야되기 때문에 배열이 와야하고 제너릭 타입을 써주어야한다
//   return data[0];
// };

// let num = returnFirstValue([0, 1, 2]);

// let str = returnFirstValue([1, "Hello", "World"]);

// -------------------------------------------------
// 딱하나만 찍어서 이건 숫자야라고 표시하기
// 우리는 숫자만 str타입에 나오길 원했다
const returnFirstValue = <T>(data: [T, ...unknown[]]) => {
  return data[0];
};

let str = returnFirstValue([1, "Hello", "World"]);

// // -----------------------------------------
// const getLength = <T extends { length: number }>(data: T) => {
//   //T는 legth 속성을 상속받고 length 가 들어있다
//   return data.length;
// };

// getLength("Hello");
// getLength([1, 2, 3]);
// getLength({ length: 1 });

// getLength(null); 형제요소
// getLength(undefined); //다운그레이드?

//TS + React.js
//React
