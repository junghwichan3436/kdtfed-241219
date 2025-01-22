const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];
let message;
const show = (user, computer, message) => {
  console.log(user);
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
};
// forEach는 이터너블한 객체에 쓸 수 있음으로 buttons는 배열이다
// buttons.forEach(function(){

// })
// buttons.forEach(() => {

// })
// 맥의 변수 콜백함수 찾아보기
const game = (user, computer) => {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보바위":
        message = "컴퓨터승리";

        break;
    }
  }
  show(user, computer, message);
};
// 콜백이 계속나오지 않게 하기 위해 play 선언해서 해준다
const play = (event) => {
  const user = event.target.innerText;
  // console.log(event.target.innerText);
  // floor은 값을 내리고 ceil은 값을 올리는 함수
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});

// 아래 함수와 같다

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.innerText);
//   });
// });
