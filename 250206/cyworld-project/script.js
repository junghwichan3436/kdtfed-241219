// const aside = Number(prompt("한변의 값을 입력해주세요"));
// const bside = Number(prompt("다른 한변의 값을 입력해주세요"));
// const cside = Number(prompt("나머지한변의 값을 입력해주세요"));

// let possible = "yes";
// let impossible = "no";

// possible = () => {
//   if (cside < aside + bside || aside < cside + bside || bside < cside + aside) {
//   } else if (
//     cside > aside + bside &&
//     aside > cside + bside &&
//     bside > cside + aside
//   )
//     return;
// };

// console.log(possible);

// impossible = () => {
//   if (cside > aside + bside && aside > cside + bside && bside > cside + aside) {
//   }
// };

const aside = Number(prompt("한변의 값을 입력해주세요"));
const bside = Number(prompt("다른 한변의 값을 입력해주세요"));
const cside = Number(prompt("나머지한변의 값을 입력해주세요"));

let possible = "yes";
let impossible = "no";

possible = () => {
  if (cside < aside + bside || aside < cside + bside || bside < cside + aside) {
  } else if (
    cside > aside + bside &&
    aside > cside + bside &&
    bside > cside + aside
  )
    return;
};
console.log(possible());
console.log(document);

// console.log(possible);
// 삼항조건 연산자
// possible = () => {
//     if (cside < aside + bside || aside < cside + bside || bside < cside + aside ,
//         cside > aside + bside &&
//           aside > cside + bside &&
//           bside > cside + aside )
// }
