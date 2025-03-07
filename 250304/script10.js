//비동기적인 실행을 하는 함수들을 활용해서 태생적을 싱글스레드 방식으로 작동하는 자바슼트립트를 마치 멀티스레드 방식으로 작동하는 자바스크립트인 것처럼 사용하는 방법을 학습!!

//비동기적인 것이 굉장히 유효한 방식이라는 것에는 이견이 없읍!!
//하지만, 비동기적이라고 하더라도 그 비동기 함수간 동기적인 진행 프로세스가 작동해야하는 경우!!

// (1)외부에서 tmdb데이터를 찾아온 이후에
// (2)해당 데이터를 브라우저 화면에 출력!!

//비동기 함수 앞에 await라는 예약어를 사용하면, 앞에서 실행되고 있는 비동기 처리 함수가 종료 되어야지만 실행될 수 있도록 조치할 수 있다!!

//await라는 예약어는 반드시 async라는 함수 안에서만 사용가능하다!!

//일반함수 선언 및 호출
// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

//async함수 선언 및 호출

// const displayGood = async () => {
//   console.log("Good");
// };

// displayGood();

// async는  promise를 반환하기 때문에 then이라는 메서드 함수를 반환하고 catch라는 함수를 쓸 수 있다
// --------------------------------------------------------
const whatYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject = (subject) => {
  return `Hello, ${subject}`;
};

// whatYourFavorite()
//   .then(displaySubject)
//   .then((result) => {
//     console.log(result);
//   });
// 축약
// whatYourFavorite().then(displaySubject).then(console.log);

// 두가지함수 다 한번에 호출하고 싶다
const init = async () => {
  const response = await whatYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
};
init();

// 둘다 promise를 받아오지만 못받아온다 둘다 비동기이기때문에 await로 시간의 예약을 맞추어줘서 하나가 끝나면 들어와라해야 들어올 수 있다
