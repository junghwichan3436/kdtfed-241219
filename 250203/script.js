// console.log(document.querySelector("#order-name").value);

// 인덱스 값으로 안의 내용 찾아오기
// document.querySelector("#items").options[1].innerText

const fruitItems = document.querySelector("#items");

const displayfruit = () => {
  let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  alert(`${selectedText}를 선택했습니다!`);
};

fruitItems.addEventListener("change", displayfruit);
