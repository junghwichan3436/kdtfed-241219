// CharAt과 반대상황
// const str = "Good morning, everyone. Beautiful morning.";
// console.log(str.indexOf("morning")); morning이 처음나오는 위치
// console.log(str.indexOf("evening")); evening이 처음나오는 위치

// let fristIndex = str.indexOf("morning");
// console.log(str.indexOf("morning", fristIndex));

const str1 = "Hello,everyone.";
console.log(str1.includes("one")); //부분 조합이 되어있어도 참이다
// console.log(str1.indexOf("every") === 6);
// console.log(str1.indexOf("every") !== 1);

// console.log(str1.startsWith("l", 2)); //l이 2번째 에서 시작되어지는게 맞냐?
// console.log(str1.endsWith("one.", 15)); //16개의 문자열 중에 마지막에 끝나는 거냐?
// console.log(str1.endsWith("lo", 5)); //5개의 문자열 중에 마지막에 끝나는 거냐?

// endswith
// console.log(str1.endsWith("everyone."));
// console.log(str1.endsWith("Everyone."));
// console.log(str1.endsWith("one."));
// console.log(str1.endsWith("lo,everyone"));

// startwith
// ~로 시작한다 라는 뜻으로 true 값과 false로 반납한다
//대소문자의 구분이 매우 중요하다
// console.log(str1.startsWith("Hello"));
// console.log(str1.startsWith("He"));
// console.log(str1.startsWith("he"));
// console.log(str1.startsWith("Hello,eve"));
