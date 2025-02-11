const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

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

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);

rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});
