// type A = () => number;
// type B = () => 10;

// let a = () => 10;
// let b = () => 10;

// a = b;
// //b = a;

// type C = (value: number) => void;
// type D = (value: 10) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

// // 마치 다운캐스팅이 되는 느낌
// // c = d;
// d = c;

// //함수의 매개변수 개수가 동일하면서,반환값이 없는 경우
// type Animal = {
//   name: string;
// };

// type Dog = {
//   name: string;
//   color: string;
// };

// let animalFunc = (animal: Animal) => {
//   console.log(animal.name);
// };
// let dogFunc = (dog: Dog) => {
//   console.log(dog.name);
//   console.log(dog.color);
// };

// // animalFunc = dogFunc;
// dogFunc = animalFunc;
// // 하나의 경우의 수를 만들어내는 애 보다 두개의 경우의 수를 만들어내가 더 슈퍼타입이다

// //함수의 매개변수의 개수가 다른경우

// type Func1 = (a:number,b:number)

// type Func1 =(a:number,b:number) => void
// type Func2 =(a:number) => void

// let func1:Func1 = (a, b) => {}; //매개변수가 많아진단것은 오리가 만들어낼수 있는 것 이 많아지다
// let func2:Func2 = (a) => {};

// func1 = func2
// func2 = func1

//함수 오버로딩
function func7(a:number): void
function func7(a:number,b:number,c:number): void


const func7  (a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
};



func7(1);
func7(1, 2);
func7(1, 2, 3);
