// const func = (a: number, b: number): number => {
//   return a + b;
// };
// 위와 같다
const func = (a: number, b: number): number => a + b;

//매개 변수 => 선택적 매개변수
// 있을 수도 있고 없을 수 도 있다 하면 => 타입가드 생각해라
//바닐라 자바스크립트 에서도 공부한 내용 선택적 매개변수는 무조건 뒤에 와야 한다

const introduce = (name: string, tall?: number) => {
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
};

introduce("박세진", 182);

introduce("박세진");

const getSum = (...rest: [number, number, number]) => {
  //명확한 개수와 타입을 가져갈려면 튜플 방식으로 써 주어야한다
  //숫자값을 가지고 있는 배열이된다
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
};

getSum(1, 2, 3);
// getSum(1, 2);
// getSum(1, 2, 3, 4);

//타입별칭을 활용해 함수를 대신할 수 있다
//타입별칭은 객채도 받고 함수도 받는다
// instance는 객체만 받는다
type Add = (a: number, b: number) => number;
type Call = { (a: number, b: number): number };
//타입별칭은 함수도 받을 수 있지만 객체도 받을 수 있다
//여기선 (a: number, b: number) 이게 key 이고 number 가 value다

const add: Add = (a, b) => a + b;
//const add: Call = (a, b) => a + b; 위에 것과 같다
const sub: Add = (a, b) => a - b;
const Multiply: Add = (a, b) => a * b;
const divid: Add = (a, b) => a / b;

//좀 더들어가면 배우는 데 이걸 고차함수라고 부른다
// const test: Add = (a: number, b: number) => (number = (a, b) => a * b);
