// 1 컨텍
// 2 이동 한 간격

// 3 떨어진 지점에서의 실제로 움직인 거리
// 4 두번째로 손가락이 갔을때

// hashlist sticky event
window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  // 스크롤이 268을 넘었을 떄 실행해라
  if (scrollY > 268) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

// touch event
// 586 스크롤자체 컨텐츠 너비
// 226 스크롤이 가능하도록 하기위해서 준 여백의 공간
// 812 전체공간 확보
// ------------------------------------
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
// 스크롤 할 수 있는 여백 만들기 586+226
const listScrollWidth = hashContent.clientWidth + 200;

// 손가락을 댓을때 지점
// 가변적인 값으로 let을 줌
let startX = 0;
// 손가락으로 움직인지점
let nowX = 0;
// 손가락 을땐 지점
let endX = 0;
// 두번째로 찍고자했을 때 먼저간 값을 확인하기 위한 것
let listX = 0;

// startX에 값을 주어야하니까 return문을 쓴다
const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
};
// 클릭하고 이동하는 걸도와주는 함수

// 값을 찾아오니까 get
const getTranslateX = () => {
  // console.log(getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]);
  //0-9를 배재하고 찾아온다,음수도포함한
  // 찾아오고자하는 값을매개변수로 넣어준다
  //배열로 바꾸어준다!!
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

// e를 참조변수로 받아옴
const onScrollMove = (e) => {
  nowX = getClientX(e);
  // 이동할 거리체크
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
    // 갈수 없는데 더갈려고함
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);

  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

// 마우스 다운했을 땐 눌렀다 땟을 때와 눌러서 움직일떄 두가지가 있따
const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
// 클릭은 눌렀다 땟을 때를 의미하고 마우스 다운은 오직 눌렀다는 의미
hashContent.addEventListener("mousedown", onScrollStart);
