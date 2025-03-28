const displayDate = document.querySelector("#today");
const displayTime = document.querySelector("#clock");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay(); //요일을 가져온다

let day2;

switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${day2}`;

const clock = () => {
  const current = new Date();
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();
  // 10보다작다면 앞에 0을 붙여주고 아니라면 본값을 유지한다
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }

  displayTime.innerText = `${period} ${hrs}시 : ${mins}분 : ${secs}초`;
  // 한자리 두자리 왔다갔다 하면 이쁘지 않기때문에
};
setInterval(clock, 1000);
// setINterval 클락이라는 함수를 1 초마다 실행해라
