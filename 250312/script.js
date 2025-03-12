// Fullpage
const sec2_Slider = document.querySelector("#sec2 .slider_wrap");
console.log(sec2_Slider);
const sec2_Title = document.querySelector

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"], //옆에 점으로 만들어서 클릭한 페이지로 넘어가는것
  afterLoad: (old_elem, new_elem, direction) => {
    //old_elem어디선가부터  //new_elem 왔다
    if (new_elem.index == 2) {
      console.log("section 2 hello!");
    }
    if (old_elem.index === 2) {
      sec2_reset();
      console.log("section 2 bye");
    }
  },
  //특정섹션에들어가서 읽게 되었을때 단어를 읽어서 실행해 라는뜻
});

function sec2() {
  sec2_Slider.style.cssText = "opacity: 1; transform: tranlateX(-50px)";
}
function sec2_reset() {
  sec2_Slider.style.cssText = "opacity: 0; transform: translateX(50px)";
}

// GNB & Toggle
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});
