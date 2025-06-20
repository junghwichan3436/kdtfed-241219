/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst playBtnIcon = playBtn.querySelector(\"i\");\nconst muteBtn = document.getElementById(\"mute\");\nconst muteBtnIcon = muteBtn.querySelector(\"i\");\nconst volumeRange = document.getElementById(\"volume\");\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst timeline = document.getElementById(\"timeline\");\nconst fullScreenBtn = document.getElementById(\"fullScreen\");\nconst fullScreenBtnIcon = fullScreenBtn.querySelector(\"i\");\nconst videoContainer = document.getElementById(\"videoContainer\");\nconst videoControls = document.getElementById(\"videoControls\");\n// console.log(videoContainer.dataset); //css의 dataset으로 useparams와 같이 뒤에 파라미터값을 찾아올 수 있다!!!!!!!!!\n\n// console.log(fullScreenBtnIcon, muteBtnIcon, playBtnIcon);\n\nlet controlsTimeout = null;\nlet controlsMovementTimeout = null;\nlet volumeValue = 0.5;\nvideo.volume = volumeValue;\nconst changeVideoTime = seconds => {\n  video.currentTime += seconds;\n};\nconst handlePlayClick = () => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\ndocument.addEventListener(\"keyup\", e => {\n  //스페이스바 눌렀을 때 정지\n  if (e.code === \"Space\") {\n    handlePlayClick();\n  }\n  if (e.code === \"ArrowRight\") {\n    //5초 넘기기\n    changeVideoTime(5);\n  }\n  if (e.code === \"ArrowLeft\") {\n    //5초 줄이기\n    changeVideoTime(-5);\n  }\n});\n\n// const handlePlay = () => {\n//   playBtn.innerText = \"Pause\";\n// };\n\n// const handlePause = () => {\n//   playBtn.innerText = \"Play\";\n// };\n\nconst handleMute = () => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  // muteBtn.innerText = video.muted ? \"Unmute\" : \"Mute\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n  muteBtn.classList = video.muted ? \"fas fa-volume-xmark\" : \"fas fa-volume-high\";\n};\nconst handleVolumeChange = e => {\n  const {\n    target: {\n      value\n    }\n  } = e;\n  if (video.muted) {\n    video.mute = false;\n    muteBtn.innerText = \"Mute\";\n  }\n  volumeValue = value;\n  video.volume = volumeValue;\n};\nconst formatTime = seconds => {\n  return new Date(seconds * 1000).toISOString().substring(14, 19);\n};\nconst handleLoadedMetadata = () => {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\nconst handleTimeUpdate = () => {\n  currentTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\nconst handleTimelineChange = e => {\n  const {\n    target: {\n      value\n    }\n  } = e;\n  video.currentTime = value;\n};\nconst handleFullScreen = () => {\n  const fullScreen = document.fullscreenElement;\n  if (fullScreen) {\n    document.exitFullscreen();\n    // fullScreenBtn.innerText = \"Enter Full Screen\";\n    fullScreenBtn.classList = \"fas fa-expand\";\n  } else {\n    videoContainer.requestFullscreen();\n    fullScreenBtn.classList = \"fas fa-compress\";\n  }\n};\nconst hideControls = () => {\n  videoControls.classList.remove(\"showing\");\n};\nconst handleMouseMove = () => {\n  if (controlsTimeout) {\n    clearTimeout(controlsTimeout);\n    controlsTimeout = null;\n  }\n  if (controlsMovementTimeout) {\n    clearTimeout(controlsMovementTimeout);\n    controlsMovementTimeout = null;\n  }\n  videoControls.classList.add(\"showing\");\n  controlsMovementTimeout = setTimeout(hideControls, 3000);\n};\nconst handleMouseLeave = () => {\n  controlsTimeout = setTimeout(hideControls, 3000);\n};\nconst handleEnded = () => {\n  //영상이 끝나면 이함수를 실행시켜라\n  const {\n    dataset: {\n      videoId\n    }\n  } = videoContainer;\n  console.log(videoId);\n  fetch(`/api/videos/${videoId}/view`, {\n    method: \"POST\"\n  });\n};\nvideo.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMute);\n// video.addEventListener(\"play\", handlePlay);\n// video.addEventListener(\"pause\", handlePause);\nvideo.addEventListener(\"loadedmetadata\", handleLoadedMetadata); //html안에있는 소스데이터를 로딩한다면 메타데이터들을 찾아올 수 있다\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nfullScreenBtn.addEventListener(\"click\", handleFullScreen);\nvideo.addEventListener(\"mousemove\", handleMouseMove);\nvideo.addEventListener(\"mouseleave\", handleMouseLeave);\nvideo.addEventListener(\"ended\", handleEnded);\n\n//# sourceURL=webpack://youtube/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;