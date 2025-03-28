// Fullpage
const sec2_Slider = document.querySelector("#sec2 .slider_wrap");
const sec2_Title = document.querySelector("#sec2 .title");

new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"], //옆에 점으로 만들어서 클릭한 페이지로 넘어가는것
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
      console.log("section 2 hello!");
    }
    //old_elem어디선가부터  //new_elem 왔다
    if (old_elem.index === 2) {
      sec2_reset();
      console.log("section 2 bye!");
    }
  },
  //특정섹션에들어가서 읽게 되었을때 단어를 읽어서 실행해 라는뜻
});

function sec0() {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    direction: "alternate",
    loop: true,
  });
}
function sec1() {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".g01",
    height: "80%",
  })
    .add({
      targets: ".g02",
      height: "70%",
    })
    .add({
      targets: ".g03",
      height: "80%",
    })
    .add({
      targets: ".g04",
      height: "85%",
    });
}

function sec1_reset({
  anime({
    targets:".gage_in"
    height:0,
  })
})

function sec2() {
  sec2_Slider.style.cssText = "opacity: 1; transform: translateX(-50px)";
  sec2_Title.style.cssText = "opacity: 1; transform: translateX(50px)";
}

function sec2_reset() {
  sec2_Slider.style.cssText = "opacity: 0; transform: translateX(50px)";
  sec2_Title.style.cssText = "opacity: 0; transform: translateX(-50px)";
}

// GNB & Toggle
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});
