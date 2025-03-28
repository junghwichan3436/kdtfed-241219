const button = document.querySelector("button");
const result = document.querySelector("#result");

function* train() {
  yield "판교";
  yield "이매";
  yield "상동";
  yield "경기광주";
  yield "초월";
  yield "곤지암";
  yield "신둔도예촌";
  yield "이천";
  yield "세종대왕릉";
  yield "여주";
}

const gyeongang = train();
button.addEventListener("click", () => {
  let current = gyeongang.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점!";
    button.setAttribute("disabled", "disabled"); //선언하고 속성값을 준 것때매 두번썻다
  }
});
