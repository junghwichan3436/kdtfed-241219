// 오늘 날짜 정보 찾아오기
const now = new Date();
const firstDay = new Date("2024-12-19"); // 2024-12-19 찾아오기 시간을 필요없음
// 1970년 부터 현재까지 밀리초얼마나나왔는지 알아보기
const toNow = now.getTime(); // getTime 밀리초 시간 가져오기
const toFirst = firstDay.getTime(); //firstDay까지의 밀리초 가져오기
const passedTime = toNow - toFirst; //2024-12-19 ~2025-02-12 까지의 밀리초로계산하기
const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); //55....이였는데 55가 된다

// 함수로 바꾸어주기
const calcDate = (days) => {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerText = `${year}년 ${month}월 ${date}일`;
};

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

document.querySelector(".accent > span").innerText = `${passedDay} 일`;
// // 100일 경과된후
// let future = toFirst + 100 * (24 * 60 * 60 * 1000); //밀리초에서 100일이 경과된 후를 말함
// let someday = new Date(future); // 100일이 되었을 때에대한 객체의 값을 찾아온다
// let year = someday.getFullYear(); //년도 가져오기
// let month = someday.getMonth() + 1; //월 가져오기 무조건 +1
// let date = someday.getDate(); //일 가져오기
// document.querySelector("#date100").innerText = `${year}년 ${month}월 ${date}일`; //실행

// // 200일이 경과된후
// future = toFirst + 200 * (24 * 60 * 60 * 1000); //밀리초에서 200일이 경과된 후를 말함
// someday = new Date(future); // 100일이 되었을 때에대한 객체의 값을 찾아온다
// year = someday.getFullYear(); //년도 가져오기 month = someday.getMonth() + 1; //월 가져오기 무조건 +1
// date = someday.getDate(); //일 가져오기
// document.querySelector("#date200").innerText = `${year}년 ${month}월 ${date}일`; //실행

// // 365일이 경과된후
// future = toFirst + 365 * (24 * 60 * 60 * 1000); //밀리초에서 365일이 경과된 후를 말함
// someday = new Date(future); // 100일이 되었을 때에대한 객체의 값을 찾아온다
// year = someday.getFullYear(); //년도 가져오기
// month = someday.getMonth() + 1; //월 가져오기 무조건 +1
// date = someday.getDate(); //일 가져오기
// document.querySelector("#date365").innerText = `${year}년 ${month}월 ${date}일`; //실행

// // 500일이 경과된후
// future = toFirst + 500 * (24 * 60 * 60 * 1000); //밀리초에서 500일이 경과된 후를 말함
// someday = new Date(future); // 500일이 되었을 때에대한 객체의 값을 찾아온다
// year = someday.getFullYear(); //년도 가져오기
// month = someday.getMonth() + 1; //월 가져오기 무조건 +1
// date = someday.getDate(); //일 가져오기
// document.querySelector("#date500").innerText = `${year}년 ${month}월 ${date}일`; //실행
