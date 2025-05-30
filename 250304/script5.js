// 자바스크립트 프로그래밍 언어!!

// 객체지향 프로그래밍 언어 : 거의 대부분의 모든자료를 객체구조로 생성해서 관리 운영

// 다중패러다임 언어 : 표현식문 & 실행문 방식의 모든 처리를 둘 다 겸용할 수 있기 때문에

// 싱글 스레드 언어 : thread : 회차 // 차선 => 1차선을 가지고 있습니다. 차선이 1개다. 1개의 차선에서 만약 사고가 나거나, 신호로 인해서 정차중이다 => 뒤에서는 앞에 사고가 해결되거나 신호가 변경될 때 까지는 무기한 대기!!

//비동기처리방식 & 싱글 스레드 언어 모순성!!

//자체적으로 멀티스레드의 성격을 갖도록 해주는 비동기적 함수를 가지고 있음!!
//setInterval() & setTimeout() & callback 함수등

//자바스크립트의 싱글스레드 성격을 여실히 보여주는 예시!

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => console.log("B"), 1000);
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 멀티스레드 방식으로 쓰고 싶다
// 자바스크립트에 성격을 거스르고 싶다
//멀티스레드 방식 인 것  처럼 만들었따

// 자바스크립트에서 마치 멀티스레드 방식인것처럼 보여질 수 있도록 하기 위해서는 "비동기방식"으로 무언가를 처리할 수 있는 함수등이 필요하다!

// 그렇다면," 비동기방식"으로 무언가를 처리할 수 있는 함수에는 무엇이 존재할까?

//1) 콜백함수
//2) Promise 객체
//3) async 함수 & await 예약어

// 콜백함수 => 함수 내부에 또다른 함수를 사용 => 내부에 포함된 함수의 호출 타이밍을 외부 함수가 관리를 한다는 특징

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   callback();
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// --------------------------------------------------------------

// 사용자로 부터 어떤 커피메뉴를 주문했는지 확인 하는 메세지를 전달해주고,약 3초 후에 주문한 커피가 준비완료되었다는 메세지를 전달해주는 역할을 할 에정!!

const display = (result) => {
  console.log(`${result}준비완료!`);
};

const order = (coffee, callback) => {
  console.log(`${coffee} 주문접수!`);
  setTimeout(() => {
    console.log(`${coffee} 준비완료!`);
    callback(coffee);
  }, 3000);
};

order("아메리카노");

// 중요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1급시민
//자바스크립트에서 콜백함수를 사용할 수 있는 이유?
// 변수에 담을 수 있다
// 함수(혹은 메서드)의 인자(매개변수)로 전달할 수 있다
// 함수(혹은 메서드)의 반환값( return )으로 전달할 수 있다
