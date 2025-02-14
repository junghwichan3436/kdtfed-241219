// 생성자 함수로 상속받기

function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다!`);
};

const book1 = new Book("Javascript", 1000);

book1.buy();
// 스태틱 타입이 안된다
//한다리를 거쳐야한다(한번더 선언을 해주어야한다!!)

//book이라는 생성자 함수가 조상이 된다
// book이라는 생성자 함수를 상속받는 textbook을 만들고 instance

function Textbook(title, price, major) {
  // 상속받고자하는 book를 콜한다
  Book.call(this, title, price);
  this.major = major;
}
// Textbook은 Book의 title 과 price도 상속받고 this바인딩도 상속받음

// 프로토타입을 활용해서 buyTextbook이라는 메서드함수를 만들었다
Textbook.prototype.buyTextbook = function () {
  console.log(`${this.major}전공서적, ${this.title}을 구매했습니다`);
};

// 어떤 생성자함수를 상속받는 요소.상속되어지는 요소
Object.setPrototypeOf(Textbook.prototype, Book.prototype);

// 세개의 속성과 메서드 함수를 가지고 있어야한다 book2는
const book2 = new Textbook("컴퓨터공학", 5000, "알고리즘");

console.log(book2);
book2.buyTextbook();
book2.buy();
