//>Enum =열거형 타입 : 해당변수가 카운트가 되게 만들어 줄 수 있다
enum Role {
  ADMIN,
  USER,
  GUEST,
}

const user9 = {
  name: "David",
  role: Role.ADMIN,
};
const user8 = {
  name: "Jane",
  role: Role.GUEST,
};
const user7 = {
  name: "Juliet",
  role: Role.USER,
};

console.log(user9, user8, user7);

let test01: unknown;

let test02: number = 2;
test01 = test02;
// test02 = test01;

//any는 문자나 숫자보다 더 슈퍼타입이니까 다 들어올 수 있다
let anyVar: any = 10;
anyVar = "hello";
anyVar.toUpperCase();

anyVar = true;
anyVar = {};
anyVar = [];

anyVar.pop();

let num = 10;

anyVar = num;
num = anyVar;
// any는 다운캐스팅이 허용되어지지만 unkown은 허용되지 않는다
//any는 다운캐스팅이 마음대로 되지만 unknown은 맨위에 있는 슈퍼타입이지만 다운캐스팅은 되지 않는다
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = [];
unknownVar = {};

//num = unknownVar; // downcasting 비허용

if (typeof unknownVar === "number") {
  num = unknownVar;
}

// void 타입
const func1 = (): void => {
  console.log("Hello");
};
//값을 반환하지 않는 게 void
let a: void;
a = undefined;
// void는 의도적으로 값을 반환하지 않는다
// never 타입

const func3 = (): never => {
  console.log("Hello");
};

const func4 = (): never => {
  throw new Error();
};
