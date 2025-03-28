//자바스크립트 코드가 작성 혹은 생성 => 컴퓨터 메모리 공간 =>객체가 생성 => 실행 컨텍스트 = execution context

//execution context : 개발자가 현재 작서 혹은 생성 변수(식별자)가 어떤 것이 있는지, 실행시켜야 하는 함수는 무엇인지 등등의 정보를 저장해놓고 있음!!

// execution context => 어떤 코드를 먼저 실행해야 하는가에 대한 우선순위를 결정하기 위한 목적

//컴퓨터 > 자바스크립트 어떤 곳에서 어떤방식을 실행되는지 이해!!

// 컴퓨터 공간 > stack => 쌓다 // Queue => 대기열
//엘리베이터 => 스택구조 <-> 큐 => 놀이동산
// 10층 먼저기다리고 있던 사람이 먼저 엘리베이터 탐
//엘리베이터 뒤쪽으로 가게됨 > 가장 나중에 엘리베이터에 탑승한사람

//call stack : 자바스크립트가 명령문을 처리하는 공간
//varialbeEnvironment : 환경변수 // 현재 실행 컨텍스트 내 변수면, 함수 정보,
// 실행컨텍스트 내 특정함수가 실행되는 순간 해당 함수를 스냅샷의 형태로 저장!!

//Snapshot : 일시정지 사진

// Lexicla : 사전적인 = "사전"답사

// LexicalEnvironment : 초기에는 VariableEnvironment 와 동일한 값을 ㅗ시작하지만 , 특정 함수를 호출하면 해당 함수가 실시간 처리를 하고 있는 상태를 바로 반영을 해줌!

// environmentRecord :현재 실행하고자 하는 코드들 내부에 저장되어 있는 정보값을 가지고 있음

// outer-EnvironmentReference : 현재 실행하고자 하는 코드들이 외부에 영향을 박고 있는지 ,받고 있따면 누구의 영향을 받는지를 확인 할 수 있는 정보값을 가지고 있음

// ThisBinding : 현재 변수 || 식별자가 가리켜야 하는 대상 객체가 누구인지에 대한 정보값을 가지고 있음

// let a = 1;
// function outer() {
//   function inner() {
//     console.log(a);
//     a = 3;
//   }
//   inner();
//   console.log(a);
// }

// outer();
// console.log(a);

// 1 3 3`

// function a() {
//   let x = 1;
//   console.log(x);
//   x;
//   console.log(x);
//   x = 2;
//   console.log(x);
// }

// function a() {
//   let x;
//   x;

//   x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(x);
// }

// function a() {
//   let b;
//   b = function b(){}

//   console.log(b);
//   b = "bbb";

//   console.log(b);
//   function b() {}

//   console.log(b);
// }

// a();
