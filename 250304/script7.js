//promise 객체 => 일종의약속!!
//만약 처리하고자 하는 데이터가 정상적으로 처리가 외었을 때,
//처리하고자 하는 데이터가 정상적으로 처리되지 못했을 때,
//위 2가지 사항에 따른 결과를 이원화 해서 처리하고 싶은것!!
//클래스로 선언된 프로토타입 객체!!

// 비동기 작업 실행을 했냐안했냐에따라 then 을 사용할 것인가 catch를 사용할 것인가 에 따라 달라진다

// true = fullfield
// false = rejected

// const pizza = new Promise((resolve, reject) => {
//   //선언부
//   if (false) {
//     resolve("피자를 주문합니다.");
//   } else {
//     reject("피자를 주문하지 않습니다");
//   }
// });

//실행부 => 선언했던 약속을 실행해주는 역할
//메서드 체이닝 기법을 활용해서, 선언부에서 약속한 결과를 실제 실행!!
// pizza
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("완료!"));

//promise 객체를 사용해서 무언가의 데이터를 취급할 때에는 3가지 상태변화를체크!
// 1)pending : 최초 프로미스 객체를 생성하면 무조건 펜딩단게 돌입!!
//2)fullfilled: 어떤 데이터를 정상적으로 처리하게 되면 실행단계 돌입!! =>
// 3)rejcected : 어떤 데이터를 정상적으로 처리하지 못하게 되면 거절단계 돌입=> reject라는 함수를 실행한는 단계

const start = document.querySelector(".start");
const end = document.querySelector(".end");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", " 아메리카노");
  if (coffee !== null && coffee !== "") {
    start.innerText = `${coffee} 주문접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았씁니다!");
  }
});

const display = (result) => {
  end.innerText = `${result} 준비완료!`;
  end.classList.add("active");
  start.classList.add("done");
};

const showErr = (err) => {
  console.log(err);
};

order.then(display).catch(showErr);
