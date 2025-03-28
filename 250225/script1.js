// 구조분해할당
const fruits = ["사과", "복숭아"];

// const apple = fruits[0];
// const peach = fruits[1];

const [apple, peach] = fruits; //이게바로 구조분해할당

console.log(apple, peach);

const seasons = ["봄", "여름", "가을", "겨울"];

const [spring, , fall] = seasons; //특정값만 가져오고 싶을땐 빈공간을 건너뛴다
console.log(spring, fall);

const char = ["park", "lee", "kim", "choi"];

const [teacher, ...students] = char; //  전개연산자형태를 어떻게 응용해서 쓸수 있는가 //나머지를 찾아올땐 ... 을 이용해 하나의 변수에 한번에 담아준다
console.log(teacher, students);

//객체의 구조분해할당

const member = {
  name: "David",
  age: 20,
};

const { name: username, age } = member; //여기서 name 값을 바꾸어 줄 수 있다 name을 username으로 바꾸어서 아래 콘솔을 맞게 한다
console.log(username, age);
// 객체 안에 있는 키값과 변수안에 있는 키 값이 같아야한다

// 객체의 구조분해할당 -2
const student = {
  namer: "David",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

const {
  name,
  score: { history, science }, //중첩객체이기 때문에 한번더 찾아온다
  friends: [f1, f2, f3],
} = students; //students 라는 변수를 선언해준다

console.log(f1);
