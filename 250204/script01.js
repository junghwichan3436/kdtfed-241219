// focus이벤트
document.querySelector("#userId").addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});
// blurr이벤트
document.querySelector("#userId").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
