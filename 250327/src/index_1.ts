//number
const num1 = 123;
let num2 = 456;
num2 = 789;
//num2 = "123";
let num3: number = 700;

//string
let str1 = "Hello";
str1 = "World";
// str1 = 1;
/*리터럴타입
 */
let str2: "David" = "David";
//str2 = "Juliet";
//str1 = 1;

let bool = true;
bool = false;

let test1: null = null;
test1 = null; // 값이 없다

let test2: undefined = undefined;
test2 = undefined; //값이 아예 없다 라는것을 의미

// 예외사항
let num4 = 7;
//num4 = null;
//num4 = undefined;
let num5 = null;

let num10: number = 10;
let test10: unknown;

//대수타입!
// num21 = test10;
test10 = num10;

let numArr: number[] = [1, 2, 3]; //타입추론
// numArr = ["1", 2, 3];
let strArr: string[] = ["hello", "world"];
let boolArr: boolean[] = [true, false, true];
let bool1Arr: Array<boolean | number | string> = [true, false, true, 1, "Node"]; //제너릭 타입의 유연성이다 유니온 타입

let multiArr: (string | number)[] = [1, "hello"];

let doubleArr: number[][] = [[1, 2, 3], [4, 5], [6]];
// 숫자를 가지고 있는 배열 이 있는데 거기에 또 배열이 있다

let tupl: [number, number] = [1, 2];
//number라는 값만 받아야 하고 2개만 받아야한다

//let tupl = [1, 2, 3];
//tupl = ["1",2]

//tupl.push(1); //하지만 이런것들이 들어 왔을 때 tupl을 속수무책이다

const users: [string, number][] = [
  ["David", 1],
  ["Jane", 2],
  ["Juliet", 3],
  ["Brown", 1],
  //  [5, "Whitnew"],
]; //만약 타입스크립트가 없다 면 어디서 에러가 낫는지 게속 찾고 있을거다
//이럴때 튜플을 써서 사용자 아이디가 먼저 들어오고 숫자가 나중에들어온다라는 규칙을 세운다

let user: object = {
  id: 1,
  name: "David",
};

//user.id;

//객체리터럴 타입
let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "David",
};

interface User {
  id: number;
  name?: string;
} // 여기서 물음표는 선택적 속성이다
//interface는 class와 같이 반복적으로 쓰기 위해서 만들어 논 것인데
//하나 다르다고 바뀔 순 없으니까 물음표를 쓰면 선택적으로 쓸 수  있다

let user2: User = {
  id: 3,
  name: "David",
};
let user3: User = {
  id: 4,
  name: "Brown",
};

interface User01 {
  id: number;
}

let user4: User = {
  id: 5,
};

user4.id = 7;

type Usernick = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

const test12 = () => {
  type Usernick = string;
};

let user5: Usernick = {
  id: 5,
  name: "통키",
  nickname: "피구왕",
  birth: "2002.02.02",
  bio: "내꿈은 피구왕",
  location: "서울시 서초구",
};

//인터페이스용 key는 보통 앞에 I를 쓴다
interface ICountryCode {
  // korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  [key: string]: string;
}
//타입 별칭
type countryCode = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
};

let countryCode: ICountryCode = {
  korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  Japan: "jp",
  Mexico: "1",
};

//>Enum =열거형 타입
