const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
console.log(arrows);

const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const autoVideo = document.createAttribute("autoplay");
// 문자와배열 tempaler literal쓸것
srcVideo.value = `./videos/videos/${videos[0]}`;

newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(autoVideo);
container.appendChild(newVideo);

newVideo.addEventListener("click", function () {
  // 현재 paused가 되어있는지 true false로 확인하는 조건문 paused는 속성?
  if (this.paused) this.play();
  else this.pause();
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    srcVideo.value = `./videos/videos/${videos[i]}`;
  });
});

// 속성값을 만들어준다 createAttribute

// css에서도 충분히 가능하기 때문에 css에서 간편하게 끝낼수 있는 건 css로 끝내라

// const widthVideo = document.createAttribute("width");
// // 여기서의 value는 속성안에 들어가야할 값을 의미한다
// widthVideo.value = "700";
// heightVideo.value = "400";
// newVideo.setAttribute(widthVideo);
// newVideo.setAttribute(heightVideo);
// 같다
// video {
//   width: 100%;
//   height: 100%;
// }
