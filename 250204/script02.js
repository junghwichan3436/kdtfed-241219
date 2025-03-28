const form = document.querySelector("form");
// e는 evnet를 가리킨다 실무에선 이렇게 씀
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = document.querySelector("input[type='text']");
  const word = inputText.value;
  const count = word.length;
  alert(`입력하신 [${word}]의 글자수는 ${count}입니다!`);
});
