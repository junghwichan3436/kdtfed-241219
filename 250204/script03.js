// Modal 주소접근 제한이 없다 = 주소가 바뀌지 않는다
const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const modalBox = document.querySelector("#modal-box");
// 부모요소를 찾아와야하기 때문에 기성함수를 쓴다 화살표함수의 this는
// window를 찾아오기 때문에 쓰면 안됨
openButton.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

closeButton.addEventListener("click", function () {
  openButton.classList.remove("btnActive");
  modalBox.classList.remove("active");
});
