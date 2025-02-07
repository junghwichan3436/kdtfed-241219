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
    alert(impossible);
  return;
};

console.log(possible);

// impossible = () => {
//   if (cside > aside + bside && aside > cside + bside && bside > cside + aside) {
//   }
// };
