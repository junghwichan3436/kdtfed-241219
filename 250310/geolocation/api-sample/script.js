//위치 로케이션
const button = document.querySelector("button");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  // 문자와 태그를 모두 넣기 위해 탬플릿 리터를을 씀
  result.innerHTML = `
  <b>위도 : </b> ${position.coords.latitude}, <b>경도 : </b> ${position.coords.longitude}
  `;
};

const errorPosition = (err) => {
  alert(err.message);
};

button.addEventListener("click", () => {
  if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
    //나의 위도와 경도값을 찾아오는 함수를 실행한다`

    // 대부분 options를 선언할때 객체 형태로 선언을 한다 이건 약속이다
    const options = {
      enableHighAccuracy: true, //위치 정보에 대한 정확도
      timeout: 5000, //데이터를 5초 안에 못찾아오면 다시 리셋해라
      maximumAge: 0, // 사용자의 바뀐 위치값을 즉각 확인하도록 하는 옵션
    };

    // 이동하는 곳마다 위치값을 알려준다 : watchposition
    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );
    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000); //30000 밀리초가 지나면 watchId 를 종료시켜라
  } else {
    alert("Geolocation을 지원하지 않습니다!");
  }
});
