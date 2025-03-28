// class
// 상속받는 또하나의 함수를 만든다
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다`);
  }
}

const book1 = new BookC("자료구조", 15000);

book1.buy();

// Bookc의 연장선에 있는 TexBookC 상속과정
class TexBookC extends BookC {
  constructor(title, price, major) {
    // super를 통해 가져온다
    super(title, price);
    this.major = major;
  }

  // 독자적인 메서드함수를 준다
  buyTextBook() {
    console.log(`${this.major}전공서적, ${this.title}을 구매했습니다`);
  }
}

const book2 = new TextBookC("인공지능", 5000, "컴퓨터공학");
console.log(book2);
book2.buyTextBook();
book2.buy();
