// 사용자정의 객체 생성

const newBook = {
  title: "Javascript",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다!`);
  },
};

newBook.question();
// 50000권의 책을 만들기 위한 방법
// 객체의 생성자 함수
// 특정한 객체를 반복적으로 만들어내기 위한 함수(첫글자를 대문자로 쓴다)

// 필요한 값을 받앙온다
//객체를 생성할려고한다
// book이 만들려고 하는 객체를 칭한다 this는
// book은 객체를 생성하기 위한 생성자함수
// 생성자 함수를 만든것
function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author}님의 따끈한 신간 도서입니다!`);
  };
}

//생성자 함수를 만들고 나서 해당생성자 함수를 사용할 때는 반드시 new 예약어를 써야한다
// 값을 다 불러온다
const book1 = new Book("Javascript", 360, 32000, "박세진", "2025-04-22");
console.log(book1);
book1.question();
