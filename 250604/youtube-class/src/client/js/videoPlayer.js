const video = document.querySelector("video");

const playBtn = document.getElementById("play");
const playBtnIcon = playBtn.querySelector("i");

const muteBtn = document.getElementById("mute");
const muteBtnIcon = muteBtn.querySelector("i");

const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");

const fullScreenBtn = document.getElementById("fullScreen");
const fullScreenBtnIcon = fullScreenBtn.querySelector("i");

const videoContainer = document.getElementById("videoContainer");
const videoControls = document.getElementById("videoControls");
// console.log(videoContainer.dataset); //css의 dataset으로 useparams와 같이 뒤에 파라미터값을 찾아올 수 있다!!!!!!!!!

// console.log(fullScreenBtnIcon, muteBtnIcon, playBtnIcon);

let controlsTimeout = null;
let controlsMovementTimeout = null;
let volumeValue = 0.5;
video.volume = volumeValue;

const changeVideoTime = (seconds) => {
  video.currentTime += seconds;
};

const handlePlayClick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};

document.addEventListener("keyup", (e) => {
  //스페이스바 눌렀을 때 정지
  if (e.code === "Space") {
    handlePlayClick();
  }

  if (e.code === "ArrowRight") {
    //5초 넘기기
    changeVideoTime(5);
  }

  if (e.code === "ArrowLeft") {
    //5초 줄이기
    changeVideoTime(-5);
  }
});

// const handlePlay = () => {
//   playBtn.innerText = "Pause";
// };

// const handlePause = () => {
//   playBtn.innerText = "Play";
// };

const handleMute = () => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  // muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
  muteBtn.classList = video.muted
    ? "fas fa-volume-xmark"
    : "fas fa-volume-high";
};

const handleVolumeChange = (e) => {
  const {
    target: { value },
  } = e;
  if (video.muted) {
    video.mute = false;
    muteBtn.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = volumeValue;
};

const formatTime = (seconds) => {
  return new Date(seconds * 1000).toISOString().substring(14, 19);
};

const handleLoadedMetadata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};

const handleTimelineChange = (e) => {
  const {
    target: { value },
  } = e;
  video.currentTime = value;
};

const handleFullScreen = () => {
  const fullScreen = document.fullscreenElement;

  if (fullScreen) {
    document.exitFullscreen();
    // fullScreenBtn.innerText = "Enter Full Screen";
    fullScreenBtn.classList = "fas fa-expand";
  } else {
    videoContainer.requestFullscreen();
    fullScreenBtn.classList = "fas fa-compress";
  }
};

const hideControls = () => {
  videoControls.classList.remove("showing");
};

const handleMouseMove = () => {
  if (controlsTimeout) {
    clearTimeout(controlsTimeout);
    controlsTimeout = null;
  }

  if (controlsMovementTimeout) {
    clearTimeout(controlsMovementTimeout);
    controlsMovementTimeout = null;
  }
  videoControls.classList.add("showing");
  controlsMovementTimeout = setTimeout(hideControls, 3000);
};

const handleMouseLeave = () => {
  controlsTimeout = setTimeout(hideControls, 3000);
};

const handleEnded = () => {
  //영상이 끝나면 이함수를 실행시켜라
  const {
    dataset: { videoId },
  } = videoContainer;

  console.log(videoId);

  fetch(`/api/videos/${videoId}/view`, { method: "POST" });
};

video.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
// video.addEventListener("play", handlePlay);
// video.addEventListener("pause", handlePause);
video.addEventListener("loadedmetadata", handleLoadedMetadata); //html안에있는 소스데이터를 로딩한다면 메타데이터들을 찾아올 수 있다
video.addEventListener("timeupdate", handleTimeUpdate);
volumeRange.addEventListener("input", handleVolumeChange);
timeline.addEventListener("input", handleTimelineChange);
fullScreenBtn.addEventListener("click", handleFullScreen);
video.addEventListener("mousemove", handleMouseMove);
video.addEventListener("mouseleave", handleMouseLeave);
video.addEventListener("ended", handleEnded);
