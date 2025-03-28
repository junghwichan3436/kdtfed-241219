// 동시에 주어야하니까 btns찾아오고 따로 하나하나 줘야 하니까 따로 찾아온다
const btns = document.querySelector(".controls");
const preBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIndex = 0;
// 초기화 함수
const updateWidth = () => {
  // li가 15개가 되었으니 한번더 찾아와야함
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  // 정의
  slides.style.width = newWidth;
};
// 원본값을 중앙으로 움직이기
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// 돔복제하기위한 함수생성
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIndex = num;

  // 가운데로 갖고오기 데스(끝)까지 갔을떄
  if (currentIndex === slideCount || currentIndex === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIndex = 0;
    }, 500);
  }
  // 특정시간이 지나면 실행해라라는 함수
  setTimeout(() => {
    slides.classList.add("animated");
  }, 600);
};

nextBtn.addEventListener("click", () => {
  moveSlide(currentIndex + 1);
});

// 생명연장 pre버튼 눌렀을 때니까 인덱스 값에 마이너스
preBtn.addEventListener("click", () => {
  moveSlide(currentIndex - 1);
});

// 자동슬라이드
let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIndex + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btns.addEventListener("mouseenter", () => {
  stopSlide();
});

btns.addEventListener("mouseleave", () => {
  autoSlide();
});
