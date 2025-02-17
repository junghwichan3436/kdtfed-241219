//객체 종류

/*
1.내장객체 : new Date(), Math

2.브라우저 객체 : window(alert,prompt.......)

3.문서객체(브라우저객체의 자식이다) :document

4.사용자정의객체 : 직접 개발자가 원하는 형태 & 기능을 담고 있는 객체의 형태로 정의하는 것을 의미
*/

/*
객체는 특징 및 원리 혹은 패턴을 가지고 있음
객체는 property (= 속성)로 구성되어 있음

그렇다면 속성은 어떤 형태를 띄고 있는가?
반드시 key:value의 형태를 띄고 있는 1쌍이다!!
value에 입력될 수 있는 값의 형태는 숫자,문자만 가능한가?
//배열도 가능//함수도가능

객체의 특정 key안에 value 값으로 입력된 자료의 형태가 함수인 경우에는 별도의 용어를 사용합니다!!

특정객체안에 들어올 값이 함수일 경우에 method 라고 부른다
method = 메서드 = 방법 => 우리가 그동안 사용했던

뒤에 소괄호가 붙으면 함수
querySelector() => 함수       =     document.querySelector(document라는 객체의 함수)

윈도우안에 document(프로퍼티) 안에 querySelector(메서드) 
window.document.querySelector())

그렇기에 함수도 객체의 메서드라고 부를 수 있다 
객체가 최고의 부모이기 때문에
*/

//객체를 정의하는 방법
// 한쌍의 프로퍼티가 있고
//안에 key와 value 의 값이 있다?

let obj1 = new Object();

console.log(obj1);

// // property에 값을 넣어주려고할때 대괄호 온점 표기법 사용
// // 온점표기법 방식
obj1.name = "David";
console.log(obj1);

obj1.gender = "male";
console.log(obj1);

// //대괄호 표기법
obj1["gender"] = "female";
console.log(obj1);
// // 객체.키 = 값
obj1.name = "Romeo";
console.log(obj1);
// // 객체안에 있는 키는 마치 변수처럼 움직인다
// // 변수의 값이 재할당 되어진것과 같이

obj1["hair"] = "brown";
console.log(obj1);

// // 객체안에 값 삭제
// // 예약어
// delete obj1.name;
// console.log(obj1);

delete obj1.hair;
console.log(obj1);

// 객체안에 들어갈 값이 명확하다면 굳이 프로퍼타입을 사용하지 않고 값을넣어주면 된다
// 값에 따라 변수 객체 등을로 변한다 (대괄호 표기법 = 객체)
const student = {
  // 키 : value값 =한쌍의 프로퍼티
  name: "Juliet",
  // 객체안에 객체를 쓸 수 있다 = 중첩객체 = 변수의 성격을 갖고 있지만 일반변수는 아니다 (대괄호 표기법 = 객체)
  score: {
    history: 85,
    science: 94,
    // average 라는 메서드함수를 만들겠단 뜻
    //익명함수는
    average: function () {
      return (this.history + this.science) / 2;
    },
  },
};
console.log(student.score.average());
// 객체 안에 키안에 키가 있기 때문에 값을 찾아올 수 있따
//            함수뒤에 소괄호

const book3 = {
  title: "누구나 처음은 있다",
  page: 350,
  buy: function () {
    console.log("이책을 구입했습니다!");
  },
};
book3.buy();

// 실행문 표현식문 자바스크립트는 다중패러다임문 이기때문에 값이 출력가능하다!!

// 뒤늦게 price라는 키를 넣어 값을 설정해줄 수 있다
book3.price = 20000;
console.log(book3);
