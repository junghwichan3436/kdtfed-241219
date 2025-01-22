const board = document.querySelector(".board");
const h1 = document.createElement("h1");
const itemImg = document.createElement("img");
const resultImg = document.createElement("img");
h1.innerText = "컴퓨터와 가위. 바위. 보 맞추기 게임!";

const userChoice = prompt("가위,바위, 보중 하나를 선택하세요!", "가위");
let gameNUm;

switch (userChoice) {
  case "가위":
    gameNUm = 1;
    break;
  case "바위":
    gameNUm = 2;
    break;
  case "보":
    gameNUm = 3;
    break;
  default:
    alert("잘못선택하셨습니다");
    location.reload();
}
// console.log(gameNUm);

// 실수를 띄고있는 난수의 값을 반환한다 0보다 크고 1보다 작다 ex)0.5156...라는 함수
// Math.random();
// 숫자를 올려주는 함수
// Math.ceil;
// Math.ceil(Math.random());

let comChoice = Math.ceil(Math.random() * 3);
itemImg.src = `./Untitled/math_img${comChoice}.png`;

if (gameNUm === comChoice) {
  resultImg.src = `./Untitled/game_1.png`;
} else {
  resultImg.src = `./Untitled/game_2.png`;
}

board.append(h1, itemImg, resultImg);
// board.appendChild(itemImg);
// board.appendChild(resultImg);
