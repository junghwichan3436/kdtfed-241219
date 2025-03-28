let num1: number = 10; //number
let num2: 10 = 10; //literal

//num1 = supertype;
//num2 = subtype;

//supertype > subtype : upcasting
//subtype > supertype : downcating => any type

//num1 = num2;
//num2 = num1;

let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = undefined;

let unknownVar: unknown;

//let num: number = unknownVar;
//let str: number = unknownVar;

let test01: never = 10; //다운캐스팅
let test02: never = "string"; //다운캐스팅
let test03: never = true; //다운캐스팅

//interface
interface IAnimal {
  name: string;
  color: string;
  [key: string]: string;
}

//let animal = {
//name: "기린",
//color: "yellow",
//};

//type
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  bread: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
};

let cat = {
  name: "야옹",
  color: "white",
  country: "일본",
};

animal = dog;
animal = cat;
// dog = animal;

//객체 타입에서 대수타입을 비교할 때에는 객체안에 있는
// 프로퍼티를 기준으로 슈퍼 및 서브타입을 구분합니다 !! => 값을 많이 가지고 잇을 수록 슈퍼타입//

// 값이 많을 수록 서브타입 값이 적을 수록 슈퍼타입

type Book = {
  name: string;
  price: number;
};

let book: Book = {
  name: "ts",
  price: 30000,
  skill: "react",
};

let programingBook: ProgramingBook = {
  name: "typescript",
  price: 30000,
  skill: "reactjs",
};

book = programingBook;
//programingBook = book;

let book3: Book = programingBook;

const func = (book: Book) => {};

func(programingBook);
