// let numA = 100;
// let strA = "Hello";
// numA = "100";
// strA = 100;
// 타입에 대해 주의해야 할것
// undefined라는 타입을 할당해준것
// let message: undefined = undefined;
// 값을 할당하면 error가 뜬다
// message = 1;

// 리터럴 타입을 썻을 땐 명확하게 그 값만 받을 수 있다 (같은 숫자 타입일지라도)
// let numA: 100 = 100;
// let strA = "Hello";

// numA = 200;

// 참조타입 설명
// 배열의 타입정의
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["Hello", "World"];
// 첫번째 방식
const boolArr01: boolean[] = [true, false, true];
// 두번째 방식(이걸 더많이 쓴다!!)
// <> 여기부분을 제네릭타입이라 부른다
// 어떤부분이 나올지 몰라서 항상 열어논다
const boolArr02: Array<boolean> = [true, false, true];
// 배열 안의 값이 한가지가 아닐때
// | 한가지가 아니라 두가지다 의미한다
// const multiArr = [1, "hello"]
// 합집합의 방식으로 배열을 쓴다
const multiArr: (number | string)[] = [1, "hello"];
// 중첩배열일떄
// const doubleArr: number[][] = [[1, 2, 3], [4, 5], [6]];
// 숫자와 문자가 결합되었을때
const doubleArr: (number | string)[][] = [[1, "2", 3], [4, 5], [6]];
// 큐플
// 같은 타입을 받지만 이건 튜플타입이라고 부른다
// 비효율적인 배열을 사용하지 않기 위해 사용된것
let tup1: [number, number] = [1, 2];
tup1 = [1, 2];
console.log(tup1);

// 깊은비교같이 하나하나 다맞아야한다
let tup2: [number, string, boolean] = [1, "Hello", true];
// tup2 = [1, 2];

// push는 배열안에 값을 추가하는 함수

// 값을 두개만 받기로 했지만 push와같은 값을 추가하거나 제거하는 메소드함수에는 예외사항이 있다는 뜻이다
let tup3: [number, number] = [1, 2];
tup3.push(1);

console.log(tup3);

// 데이터의 자료형태가 일관성을 가져야할때 튜플을 쓴다
const users: [string, number][] = [
  ["박세진", 0],
  ["강백호", 1],
  ["서태웅", 2],
  ["정대만", 3],
  // [4, "채치수"],
];

// Object도 타입
