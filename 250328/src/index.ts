//interface

interface Person {
  //interface 객체타입을 전문적으로 만드는 애
  readonly name: string;
  age?: number;
  //sayHi?: (a:number,b:number) => void;
  sayHi?(a: number, b: number): void; // 둘다 된다
}
// 인자값이존재할때는 함수의 시그니처 형태로 써야한다

let person1: Person = {
  name: "David",
  //age: 20,
  sayHi: () => {},
};

let person2: Person = {
  name: "Romeo",
  age: 20,
};

//person2.name = "Jane";
//함수의 메서드타입을 호출시그니처로 정의했다

// 하이브리드라는 것은 복수의 형태가 가능하단 것이다

interface Func2 {
  (a: number): string;
  b?: boolean;
}

let func2: Func2 = (a) => "Hello World";
func2.b = true;

//타입별칭과의 강력한 차이점!!
type Type1 = number | string; //유니온 타입
type Type2 = number & string; //유니온 타입

//인터페이스
// interface Person3 {
//   name: string;
//   age: number;
// } | number | string //이렇게 유연하게 되어지지않는다

// 인터페이스를 내세워서 직접적으로 타입을 내세울순 없다
//인터페이스는 직접적으로 나서서 무언갈 할 수 없다
interface Person3 {
  name: string;
  age: number;
}

type Type3 = number | string | Person3;
type Type4 = number & string & Person3;

//const person5: Person3 & string = {
// name : "David"
// age : 20,
//};

// interface만의 고유기능
// extends는 interface만의 고유기능
//다중 확장가능 여러가지의 값을 같이 가져올 수 있다
interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {
  //extend에서 반드시 string이 슈퍼타입이되고
  // 슈퍼와서브타입이 되기때문에 777은 불가능 하나 "777은 가능하다"
  //name: "777";
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {}
//dog, cat을 따로 확장했을 때 같이쓰는게 가능하다

const dogcat = {
  name: "",
  age: 1,
  isBark: true,
  isScratch: true,
};

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "바둑이",
  age: 1,
  isBark: true,
};
// 아래걸 위와 같이 짧게 쓸  수 있다
//--------------------------------
interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chiken {
  name: string;
  age: number;
  isfly: boolean;
}

//--------------------------------------/

//타입을 이렇게 같이 쓰는게 불가능하다
type person7 = {
  name: string;
};

type person7 = {
  age: string;
};

//인터페이스 병합
//인터페이스는 이렇게 같이 쓰는 게 가능하다

interface Person10 {
  name: string;
}

interface Person10 {
  name: number;
  age: number;
}

const person10: Person10 = {
  name: "Ronaldo",
  age: 20,
};
