// 밑변과 둘레가 같으면 1라디안 이라고부른다
// 3라디안 하고 14가 남는다 그래서 3.14
// 3.14=180%

//1도 = 180분에 파이이다
//12 / 360도 = 각 30도씩 유지 // 피자하나당 30도 이다

const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue; // continue 조건값이 맞다면 건너 뛰어라
  // 1시를 의미한다
  const angle = (i + 1) * (Math.PI / 6);
  //x축값 찾기
  const x =
    132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2));
  // y축값찾기 코사인을 통해 찾아온다
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

  // 위치로 이동시키기
  if (i + 1 > 6) {
    nums[i].style.right = `${x}px`;
  } else {
    nums[i].style.left = `${x}px`;
  }
  // 위에 올라갈 애들과 아래 내려갈 애들을 탑과 바텀으로 얼마씩 줄건지로 정의 했다
  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) {
    nums[i].style.top = `${y}px`;
  } else {
    nums[i].style.bottom = `${y}px`;
  }
}
// 시분초 침 찾아오기
const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");
// 1초에한번씩 현재시간 찾아오기
const clock = () => {
  const currentTime = new Date();
  // 초
  let second = currentTime.getSeconds(); // 초값 찾아오기
  //초는 각각 6도 씩 갖고 있어야함 360도 / 60이니까
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;
  // 분
  let minute = currentTime.getMinutes();
  //분은 각각 6도 씩 갖고 있어야함 360도 / 60이니까
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;
  // 시
  let hour = currentTime.getHours(); //분을 기준으로 봐야된다 30 으로 본다
  let hourAngle = hour * 30 + (minute / 60) * 30; //30을 기준으로 100%가 되야한다
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleValue;
};
// 1초에 한번씩 움직이게 설정
setInterval(clock, 1000);

// toFixed 소수점 몇쨰짜리 까지 쓸수 있는지

// 암기해 그냥
