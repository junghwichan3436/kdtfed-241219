// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// 10보다 큰 값만 찾아서 콘솔 창에 출력해주세요!!
//조건문 & 반복문을 활용해서 !!

// let num = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 1; i > 10; i++) {
//   console.log(num);
// }
// for문
let nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10) console.log(`${nums[i]}`);
}

// for each 문
// const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// arrs.forEach((arr) => {
//   if (arr > 10) console.log(arr);
// });
