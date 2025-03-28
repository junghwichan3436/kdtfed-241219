// 인스턴스 객체 와 프로토타입의 관계

/*
1.class 혹은 생성자 함수를 사용해서 객체의 포멧(*형태)를 구현할 수 있음

2.class 혹은 생성자 함수를 사용해서 만들어진 포맷을 사용하려면 new예약어와 함께 Prototype 객체(*함수)를 호출하면 가능!!

3.이렇게 호출해온 Prototype 객체의 속성 및 메서드를 상속받은 요소를 instance(*인스턴스) 라고 함!!

4.만약 인스턴스 객체의 원조라고 할 수 있는 Prototype이 무엇인지, 혹은 해당 Prototype이 가지고 있는 속성 및 메서드 함수를 확인해보고자 할 때, 사용할 수 있는 속성은 __proto__ 이다!!!

인스턴스 객체의 영향을 준 프로토 타입의

*/

// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };

const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
};

// book의 조상을 찾아와서 prototype속성안에 메서드 함수를 넣어서
Book.prototype.finish = function () {
  let str = "";
  this.done === false ? (str = "읽는중") : (str = "완독");
  return str;
};

const book1 = new Book("Typescript", 648, false);

// 두가지 다 살리기위한 함수 생성

// 스태틱 타입이 안된다
//한다리를 거쳐야한다(한번더 선언을 해주어야한다!!)
