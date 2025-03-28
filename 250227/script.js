// Map()
// 클래스 혹은 생성자 함수 => 프로토타입 객체
// 왜 만들었을까?
//주요 자료 구조// :  키 & 값 한 쌍 프로퍼티 구성!!
//반복적인 무언가를 실행할수 없음 : 객체
// 객체 안에 있는 속성들을 인덱스화 할 수 없다

// 배열 : 이터러블 하다 => 반복적인 무언가를 실행
// 배열 안에 있는 요소들은 각각 인덱스화 할 수 있음

//객체 & 배열 장점만 추출 해서 자료구조!!

// Set()

const bag = new Map();
//Method Chaining 기법 (메서드를 체인처럼 감아서 쓴다)
// bag.set("color", "red");
// bag.set("price", "30000");
bag.set("color", "red").set("price", "30000"); //bag을 한번만 쓰자
bag.delete("color"); //color 지우기
bag.clear(); //  전부다 날리기
const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

console.log(myCup.keys());
const myCupIte = myCup.keys();
console.log(myCupIte);

const myCupIte02 = myCup.values();
console.log(myCupIte02);

const myCupIte03 = myCup.entries();
console.log(myCupIte03);

myCupIte.forEach((item) => {
  // console.log(item, typeof item);
});

myCupIte03.forEach((item) => {
  // console.log(item, typeof item);
});

//Iterable : 반복 순회 할 수 있는(*형용사)
//Itertator : Iterable한 객체가 된 요소!!(*명사)
