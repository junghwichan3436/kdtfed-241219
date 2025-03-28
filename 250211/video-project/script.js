const playButton = document.querySelector(".play-pause");
const player = document.querySelector("#music-player");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

console.log(player);

const play = () => {
  playButton.innerText = "||";
  video.play();
};
const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};
const togglePlay = () => {
  video.paused ? play() : pause();
};

const formatting = (time) => {
  // 1시간 = 60분
  // 1분 = 60초
  // 1초
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600); //  > 초로생성된 값을 시각으로 구하고자 할때의 정의 (60*60)

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
  //return `${min} : ${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime); // 현재 시간
  // 컴퓨터만 인지되는 초로 표시되기에 formatting 함수로 바꿔줘야 한다.
  duration.innerText = formatting(video.duration); // 지속중인 시간

  // 재생 된 시간, 총 영상길이 표시시
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration; // 총 경과시간
  const currentTime = video.currentTime; // 영상이 1초씩 경과되는 시간
  const percent = (currentTime / duration) * 100; // 백분율 구하는 공식 * 100 = %로 나타낼수 있다.
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth; //흰색 바전체를 찾아오는 단어
  const newPositon = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPositon}px`; //원을 빨간색 선을따라 움직이기
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  const { rate } = e.target.dataset; // 구조 분해 할당
  video.playbackRate = rate; // 영상의 재생속도를 관여한다.
};
//  e는 참조변수
const videoPoint = (e) => {
  // console.log(e.pageX);
  // console.log(player.offsetLeft);
  //영상의 총시간중 몇퍼센트인지 알야내기
  const mouseX = e.pageX - player.offsetLeft; // 페이지 의 x길이에 서 영상의 앞의 길이를 빼준다
  const progressBarWidth = progressCover.clientWidth; //
  const duration = video.duration; // 영상의 총길이
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("pointerdown", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", videoPoint);

rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});
//버그 수정
// 우리가 어떤 소스를 full화면으로 보게 된다면 실행하는 이벤트
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    // 클릭이벤트가 작동하지 않는 선까지 세밀하게 작동시키는 이벤트 pointerdown
    document.addEventListener("pointerdown", togglePlay);
  } else {
    document.removeEventListener("pointerdown", togglePlay);
  }
});
