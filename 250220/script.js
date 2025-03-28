//regExp = regular Expression = 정규 표현식
//문자열 + 정규표현식  + 배열

//1.패턴 : 찾고자 하는 형식을 하나의 정형화된 형태로 정의
//2.플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때, 추가적인 옵션을 적용할 수 있음
// 3.클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 때, 사용할 수 있는 요소

// 정규표현식에서 패턴은 /숫자3개로이루어진 패턴/ 이다
// decimal
// const regexp = /\d{3}/;
// const regexp = new RegExp(/\d{3}/); //반복적 패턴을 적용했따
// test 일치하는지 일치하지 않는지 검사하는 역할을 한다 "boolean값으로 나온다"
//문자로이루어진 숫자 123
// regexp.test("Hello");
// regexp.test("123");

// console.log(regexp.test("Hello"));
// console.log(regexp.test("123"));

//내장객체 > class 혹은 생성자 함수로 만들어졌다
//new라는 예약어를 쓴다

// let str = "ES2025 is powerfull";
// const pattern = /ES2025/;
// match라는 함수
// console.log(str.match(/i/)); //ES6 라는 패턴을 만든것!!
// console.log(str.match(/ES6/));
// console.log(str.replace(pattern, "Love")); // ES2025라는 패턴을 Love로 바꾸어준다는 함수 replace
// str.replace(pattern, "Love");

// const str = "Love is Powerful!";

// const pattern = /love/i; // true를 반환한다 i 는 international 전역에서 가져와 서 대문자와 소문자를 구분하지 않는다
// const pattern = /love/; // false를 반환한다 대문자가 아니기 때문에
// console.log(pattern.test(str));
// const pattern = /love/i;
// console.log(str.match(pattern));

// pattern.test(str);
// console.log(pattern.test(str));
//-------------------------------------------------
// 정규표현식의 주요 클래스
// const str = "Love is Power777!";

// const pattern = /Power\d{1}/; // 숫자 7하나를 찾아온다 {3}으로 바꾸어주면 3개를 찾아온다
// const pattern = /Power\d\d\d/; // 이러한 방법도 있다
// const pattern = /Power\d{2}/;
// console.log(str.match(pattern));
// console.log(pattern.test(str)); // ????????

const hello = "hello, everyone.";

const pattern = /^H/i;
// const pattern = /One.$/i; // 해당 문자열 이 이걸로 끝나냐 안 끝나냐 $

console.log(pattern.test(hello));
// one.으로 끝나는거

// console.log(/one.$/.test(hello));
// console.log(/e.$/.test(hello));
// console.log(/one$/.test(hello));

// const str = "ES2025";
// 숫자를 찾고싶다
// console.log(str.match(/[0-9]/)); // 이패턴안에 어떤한범위를 지정하게되면 단순한 문자열이 아니라 배열의 형태로 반환한다
//범위앞에 캐럿이나오면 ~앞에 지만 범위 안으로 들어오면 0~9까지의 범위를 제외한 모든 요소를 찾아와라

const str = "Ooooops";

console.log(str.match(/o/)); //2개이상이면서 4개까지인 문자를 찾아온다
console.log(str.match(/o{2,6}/i)); //2개이상값을 찾아온다

const number = /^[0-9]+$/; //v패턴인데 0~9까지고 숫자가아닌 값을 찾아오는 데
// 숫자가 몇자이든 상관없고 $는 이러한 형태의 패턴으로 반복한후 종료가 된다

// const positive = /^[1-9]\d+$/;[1-9]\d 이형태의 반복종결
const positive = /^[1-9]\d*$/; //[1-9]\d 이형태의 반복종결

const negative = /^-[1-9]\d*$/;
// const negative = /^\-[1-9]\d*$/; // 특수문자로 인식하게된다

const engword = /^[a-zA-Z]+$/; //i를 주어도 되지만 보통이러한 형태로 많이 쓴다 소문자 a~z 대문자A~Z까지의 값을 반복해서 가져온다

const engandword = /^[a-zA-Z0-9]+$/;
// 한글
const korean = /^[가.힣]/; // 자음과 모음의 패턴가운데 무엇이 들어와도 갠찬

// 한글 영어

const koreanandenglish = /^[가.힣a-zA-Z]+$/;

//정규표현식을 직접만드는 경우 많이 없음!!!!!!!!!!
