// const fruits = ["apple", "banana", "grape"];

// console.log(fruits);
// 참조타입
// 사본값이 바뀌면 원본도 바뀌는데
// 이걸 막기위해 ...으로
// 새로운 값으로 만들어낸다

// 전개연산자 구문 = 값을 펼쳐준다

// spread operator
// console.log(...fruits);
// 기본매개변수의 반대상황
//인자값을 아무리 많이 주어도 매개변수의 갯수만큼 가져온다
// const addNum = (a, b) => {
//   return a + b;
// };

// console.log(addNum(1, 3, 5, 7));
// // 전개연산자 사용
// for each문 // 몇개의 값이 들어올지 모를 때 아래구문을 쓴다 like 쇼핑몰
// const addNum = (...numbers) => {
//   console.log(typeof numbers, numbers);
//   //  여기서 number 가 참조변수
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   return sum;
// };

// console.log(addNum(1, 3, 5, 7));

// for문
// const addNum = (...numbers) => {
//   console.log(typeof numbers, numbers);
//   // numbers.forEach((number) => {
//   //   sum += number;
//   // });
//   for (let number of numbers) {
//     sum+= number
//   }
//   return sum;
// };

// console.log(addNum(1, 3, 5, 7));

// github보고 와서 다시치기

const displayFavorites = (first, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first}입니다`;
  return str;
};
console.log(displayFavorites("사과", "포도", "토마토"));
