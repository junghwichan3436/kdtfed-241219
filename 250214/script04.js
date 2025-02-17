//객체는 최소한 자바스크립트에서 만큼은 최초의 근원이다!!
// 모든것의 근원이다!!

// 예를 든것
// class Array {
//   constructor(length) {
//     this.length = length
//   }
//   filter() {

//   }
//   push() {

//   }
// }

// const arr = new Array();
// console.log(typeof arr);

//배열 => 이터러블하다 반복순회가능하다 =>iterable => 순회할 수 있는 객체

// 객체전용 반복문 forin
const bag = {
  type: "backpack",
  color: "blue",
  price: 30000,
};
// 키를 찾아왔따는 건 value값을 찾아왔다는 것고ㅏ 같다
for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
}
// 키값은 문자열로 찾아와서 온점표기법을 못쓴다 온점표기법은 뒤에 변수가 들어와야하기 때문에 하지만 대괄호 표기법은 뒤에 문자열을 찾아올 수 있기 때문에 대괄호 표기법을 쓸 수 있다
