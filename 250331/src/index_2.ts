//Generic

//특정 값을 인자값으로 받아서 해당 값을 반환하는 함수를 선언!!
//위 특정값이 숫자,문자,객체,배열이 될지 예측불가

// any는 업앤 다운이 모두가능한 치트키 이기 때문에 가능한 줄 알 았은데

// const func = (value: any) => {
//   return value;
// };

// let num = func(10);

// let str = func("Hello");

// num.toUpperCase();
//any 타입이기때문에 숫자도 uppercase가가능하다
// 이러면 타입스크립트의 엄격함이 필요가 없기 때문에 제어가 불가능하다

// ----------------------------------------------------

// const func = (value: unknown) => {
//   return value;
// };

// let num = func(10);

// let str = func("Hello");

// // num.toUpperCase();
// // num.toFixed();
// // str.toUpperCase(); // unknown은 다운캐스팅을 허용하지 않는애기 때문에 가능하지 않다

// if (typeof num === "number") {
//   //number인 애들만 어퍼케이스가 가능하게 해주었다
//   num.toFixed();
// }

// if (typeof str === "string") {
//   //number인 애들만 어퍼케이스가 가능하게 해주었다
//   str.toUpperCase();
// }

// 적재적소에 맞게 쓰고 싶으면 제네릭 을 써야한다

// -----------------------------------------------
// T는 상황에따라 카멜레온 처럼 타입이 바뀐다
// 제너릭 타입은 <>를 쓴다
const func = <T>(value: T): T => {
  return value;
  //그때그때마다 상황에 맞게 변하기 위해 타입변수를 쓴다
};

let num = func(10); //원래 라면 오류가 떠야하지만 제너릭 함수를 썻기 때문에 무엇이들어오든지 타입이변한다

const func01 = <T>(value: T): T => {
  return value;
};

let arr = func<[number, number, number]>([1, 2, 3]); //숫자값을 갖고있는 배열 (튜플 타입)
//제너릭 형식으로 타입을 지정하게 되면,기본적으로 상대적인 슈퍼타입을 타입으로 지정하려고 함 !!
