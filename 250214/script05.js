// 객체자료구조 배열로 바꾸기

const book1 = {
  title: "Javascipt",
  pages: 648,
  buy: function () {
    console.log("I did buy this book");
  },
};

//객체 자료구조를 배열로 변환시킬 수 있을까?
// 여기서keys는 배열이되고 keys의자료구조는 배열이 된다
// key값  배열로찾아오기
const keys = Object.keys(book1);
console.log(keys);

// buy라는 메서드함수도 배열로 들어올 수있다
// value 값 배열로 찾아오기
const values = Object.values(book1);
console.log(values);

// 중첩배열로 찾아오기
// ['title','javascript'] 처럼
const entries = Object.entries(book1);
console.log(entries);
