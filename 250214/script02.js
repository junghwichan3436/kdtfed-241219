// 생성자 함수를 class로 만든다!!!!!!!!!!!
// 반복적으로 사용할 객체를 만들어준다 class는
// class는 일반적인 함수형태를 가지고있지만 다르다
// constructor라는 함수를 써야한다
class Book {
  constructor(title, page, price, author, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }
  // 만들고 싶은 메서드함수의 이름을넣는다
  question() {
    console.log(`${this.author}님의 따끈한 신간 도서입니다!`);
  }
}
const book1 = new Book("Javascript", 360, 32000, "박세진", "2025-04-22");

console.log(book1);
book1.question();
// 기존의 생성자함수는 가독성이 떨어진다
// 뒤에배울 상성에 차이가있따
// class를 썻을때 상속이 빠르다
