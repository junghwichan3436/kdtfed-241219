//Iterable 객체 & 반복문을 지배하는 자가 JS의 중급단계를 지배한다!

// 반복문
//반복하게 하려고 할때
// 자료구조 & 알고리즘 커리큘럼
// 어떤경우에 배열
// 문법
// 어떤 자료구조가  현 문제를 해결하는데 가장 효율
// 시간복잡도 => 현 자료구조 및 알고리즘이 해당 문제를 해결하는 데 걸리는 시간
//빅오 기장 길게 걸리는 시간 // 빅세타 중간 // 빅오메가 가장 짧게 걸리는 시간

// const students = ["Park", "Kim", "Lee"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// 기본형 반복문
//for문
// 반드시 자바스크립트 내 Iterable 객체 사용가능
// 초기값 >조건식 > 반복문실행 > 증감문
// for (초기값; 조건식; 증감문) {
//   반복문실행;
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 7 !== 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   } else if (i % 5 !== 0 && i % 7 === 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else if (i % 5 !== 0 && i % 7 === 0) {
//     document.write("<p class='aqua'>" + i + "</p>");
//   }
// }

// const reds = document.querySelectorAll(".red");
// reds.forEach((red) => {
//   red.style.color = "red";
// });

// const greens = document.querySelectorAll(".green");
// greens.forEach((green) => {
//   greens.style.color = "green";
// });

// const aquas = document.querySelectorAll(".aqua");
// aquas.forEach((green) => {
//   aquas.style.color = "aqua";
// });
