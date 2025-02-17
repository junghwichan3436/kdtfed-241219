// let str = " ab cd ef ";

// console.log(str.trim());
//trim 앞쪽과 뒷쪽의 여백을 없애 준다
// -trimStart(문자열) => 특정 문자열의 앞 여백을 없애고자 할 때 사용
// -trimEnd(문자열) => 특정 문자열의 뒷 여백을 없애고자 할 때 사용

// let str = "Good Morning.";
// console.log(str.toUpperCase());
// -toUppercase(문자열) => 모든 문자열을 대문자로 변경
// console.log(str.toLowerCase());
// -toLowercase(문자열) => 모든 문자열을 소문자로 변경

// let str = "Good Morning.";
// console.log(str.substring(5)); //5번째의 인덱스 값부터 가져오겠다
// console.log(str.substring(0)); //5번째의 인덱스 값부터 가져오겠다
// console.log(str.substring(0, 4)); //0번째의 인덱스 값부터 4번째의 인덱스 값 앞까지 찾아온다 여기서 2번째에들어가는 인자값은 들어가는 숫자의 앞번까지 가져온다

// let str = "Good Morning.";
// console.log(str.slice(5));
// console.log(str.slice(0, 4));
// console.log(str.slice(-5, -12)); //slice는 -5부터 -12 앞까지 찾아온다
// console.log(str.substring(-5, 12)); //substring은 -5(음수값)을 0으로 받고 12번째 앞까지 찾아온다

//""빈문자열
//  " " 공백이 있는 문자열
// 은 완전히 다른의미다
// 문자열을 배열로 바꿀때 사용
let str = "Good Morning.";
const arr = str.split(" ");
console.log(arr);
