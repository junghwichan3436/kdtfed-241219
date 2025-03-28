//콜백지옥 => 콜백함수를 계속 이어서 작성하는 형식

// setTimeout(() => {
//   let coffeeName = "에스프레소";
//   console.log(coffeeName);
//   setTimeout(() => {
//     coffeeName = "카페라떼";
//     console.log(coffeName);
//     setTimeout(() => {
//       coffeeName = "카페모카";
//       console.log(coffeName);
//       setTimeout(() => {
//         coffeeName = "아메리카노";
//         console.log(coffeeName);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// -----------------------------------------------------

// let coffeeName = "";

// const addAmericano = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
// };

// const addMocha = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addAmericano, 2000, "아메리카노");
// };

// const addLatte = (name) => {
//   coffeeName += `, ${name}`;
//   console.log(coffeeName);
//   setTimeout(addMocha, 2000, "카페모카");
// };
// const addEspress = (name) => {
//   coffeeName += name;
//   console.log(coffeeName);
//   setTimeout(addLatte, 2000, "카페라떼");
// };

// setTimeout(addEspress, 2000, "에스프레소");

// 약속 = promise // ES6 = 2015년
//만약에 어떤 데이터를 가져오는데 문제가 없으면 A를 출력해줘, 그런데 만약에 문제 생겨서 오류 및 에러가발생하면 B를 출력해줘 라고 약속!
// 약속한 실행문  지켜보고 있다가 나중에 실행해줌
// promise함수
// 약속선언
const addCoffe = (name) => {
  return (prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newName = prevName ? prevName + "," + name : name;
        console.log(newName);
        resolve(newName);
      }, 2000);
    });
  };
};
// 약속실행
addCoffee("에스프레소")()
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"))
  .then(addCoffee("아메리카노"));

// new라는 예약어는 class 라는 객체를 통해 만들어진 예약어

// 배열을 쓰는 약식
const arr = [1, 2, 3, 4, 5, 6];
console.log(typeof arr);

// 배열을 쓰는 정석
let arr1 = new Array();
console.log(typeof arr1);

arr1[0] = 1;
arr1[1] = 2;
console.log(arr1);
