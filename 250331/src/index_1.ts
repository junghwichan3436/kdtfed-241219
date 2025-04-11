// //let str = "Hello World!";

// //console.log(str);

// class Employee {
//   //Field
//   //name: string = ""; // 이런 식으로
//   //protected name: string; //생성자함수의 타입을 정의하지 않았을 때는 초기값이 필요하지만 정의하였을 때는 초기값을 써주지 않아도 된다
//   //private position: string; //타입스크립트에서의 클래스 필드는 직접 해당 키에대한 타입정의와 함께 초기값까지 정의 해주어야 한다
//   // private age?: number; //옵셔널 프로퍼티는 항상 마지막이다 기본 매개변수의 자리보다 앞으로 올 수 없다

//   //Constructor
//   constructor(
//     protected name: string,
//     private position: string,
//     private age?: number
//   ) {
//     //함수로 들어오는 애들의 타입은 무조건 지정되어있어야한다
//     //옵셔널 프로퍼티는 항상 마지막이다 기본 매개변수의 자리보다 앞으로 올 수 없다
//   }

//   //Method
//   work() {
//     console.log(`Hello! ${this.name} 입니다 `);
//   }
// }

// const employee1 = new Employee();
// console.log(employee1);
// employee1.work();
// // 클래스를 선언하고 인스턴스객체를 생성하는 가장 기본적인 방법

// const employee2 = new Employee("Henry", 20, "Striker");
// console.log(employee2);

// employee2(work);

// const employee3 = new Employee("Rooney", "Stricker", 30);
// employee3.name = "Son"; //접근제어자 private를 쓰면 외부에서 접근이 불가능하다
// console.log(employee3); //선택적 프로퍼티를 넣지 않아도 값이 들어올 수 있다는것
// employee3.work();
// // 2. 타입스크립트
// // -클래스 : 만약 생성자 함수를 통해서 선택적 프로퍼티 형식으로 값을 사용하려면, 필드 및 생성자 함수 내 매개변수공간에 옵셔널 프로퍼티 적용 필수

// const employee4: Employee = {
//   //z클래스는 타입으로서의 역할도 가능하다
//   name: "",
//   position: "",
//   age: 20,
//   work: () => {},
// };

// // 타입스크립트는 슈퍼셋 언어이다
// class ExecutiveOfficer extends Employee {
//   officeNumber: number;

//   constructor(
//     //타입스크립트에서 생성자함수의 매개변수로 들어오는 애들의 타입정의가 되지 않으면 오류르 일으킨다
//     name: string,
//     position: string,
//     age: number,
//     officeNumber: number
//   ) {
//     super(name, position, age);
//     this.officeNumber = officeNumber;
//   }
//   work2() {
//     console.log(`반가원요! ${this.name} 입니다!`);
//   }
// } //상속받은 애한테 만클은 허용이 되야하지 않나?

// const employee5 = new ExecutiveOfficer("Messi", "FW", 1, 20);
// console.log(employee5);

// // super()는 클래스를 상속받을 때 부모 클래스의 생성자를 호출하는 역할을 합니다.
// // super()는 부모클래스의 기능을 활용할 때 쓰인다
// // extends	부모 클래스를 상속받아 속성과 메서드를 가져오는 역할
// // super()	자식 클래스의 생성자에서 부모 클래스의 생성자를 호출하는 역할
// //extends와 super는 typescript의 class 에서 거의 같이 쓰인다!!

// //즉 , 자식 클래스에서 부모 클래스의 기능을 사용해야 할 때 super()를 호출해야합니다
// //접근제어자
// //>public : 모든 범위(*클래스 내.외 모두 포함)에서 속성값 접근디폴트 값처럼 사용됨
// // private : 클래스 내부에서만 속성값 접근
// //protected : 파생되어진 파생 클래스까지는 접근이 가능하다 ( 상속을 받은 애까지는 허용이 되지만 아예밖에서는 되지 않는다)

// // 접근제어자를 생성자함수안에있는 매개변수안에 넣어준다면
// //field값 생략 가능
// //this객체까지 생략가능
// //값이 똑같으면 생략가능

// // ------------------------------------------------------

// interface CharacterInterface {
//   name: string;
//   moveSpeed: number;
//   move(): void; //void함수인데 반환값이 존재하지 않는 함수
// }

// // 이세가지 값이 무조건 있게 하고 싶다
// //interface 로 생성한 객체를 무조건 사용하고 싶다 했을 때 implements 를 사용한다
// //굳이 implements를 쓰면서 옵셔널 프로퍼티를 쓸 이유가없다 implements 쓸 이유가 없다
// //해당 implements의 슈퍼타입이 되어지는 요소를 반드시 써야한다
// class Character implements CharacterInterface {
//   constructor(public name: string, age: number, public moveSpeed: number) {}

//   move(): void {
//     console.log(`${this.moveSpeed} 속도로 이동가능!`);
//   }
// }
// // move()는 implements를 사용하면 반드시 사용해야하는 메서드 함수
