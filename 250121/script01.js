// let userInput = prompt("이름을 입력하세요!");
// console.log(typeof userInput);

//조건문을 실행하기에 앞서서 조건식 자체가 성립될 수 없는 값이 들어온다면, 더 이상의 조건문을 실행시키지 않는 조치!! => 메모리 효츌

// 예외 조항 처리

// if (userInput === "" || userInput === null) {
//   alert("값이 없습니다");
// } else {
//   alert(`${userInput}님 좋은 아침이에요`);
// }

// 중첩 if 조건문
// const score = prompt("내 인생 점수!");
// if (score !== "" || score !== null) {
//   if (Number(score) >= 90) {
//     alert("나름 잘 살았다!");
//   } else if (Number(score) >= 80) {
//     alert("이정도면 괜찮아");
//   } else {
//     alert("지금부터 잘하면 되지");
//   }
// }

// 짝수 & 홀수 구분하는 if 조건문!!

let userNumber = prompt("숫자를 입력하세요!");

if (userNumber !== "" || userNumber !== null) {
  userNumber = parseInt(userNumber);
  if (userNumber % 2 === 0) {
    alert(`${userNumber} 짝수 입니다!`);
  } else {
    alert(`${userNumber}는 홀수 입니다!`);
  }
}

// 삼항 조건 연산자
// let userNumber = prompt("숫자를 입력하세요!");
// if (userNumber !== "" || userNumber !== null) {
//   userNumber % 2 === 0
//     ? alert(`${userNumber} 짝수 입니다!`)
//     : alert(`${userNumber}는 홀수 입니다!`);
// }

// 실행컨테스트, 호이스팅
// 스위치문
//브레이크를 걸어주어야 제일 나중에 쓴 값을 끌어오지 않는다
// const webPage = prompt("네이버,구글,다음 중 즐겨사용하는 사이트는 어디인가요?");
// let url;

// switch (webPage) {
//   case "네이버":
//     url = "https://www.naver.com";
//     break;
//   case "구글":
//     url = "https://www.google.com";
//     break;
//   case "다음":
//     url = "https://www.daum.net";
//     break;
//   default:
//     alert("보기중에 존재하지 않는 사이트 입니다");
// }

// // 이동시키는 역할을 한다
// if (url) {
//   window.location.href = url;
// }
