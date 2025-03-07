const string = prompt("영문  소문자로 된 문자열을 입력해주세요");

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(2);
// const result = firstCh + remainStr;

// split() => 문자열을 배열로 바꿔주는 역할 => [...]
//join() => 배열을 문자열로 바꾸어주는 역할
//concat() => 서로다른 두개의 배열 혹은 유사배열을 1개의 배열로 합칠때 =>[...]

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);

// concat은 여러 문자열을 한번에 연결할 때 더 유리하다
// 문자열과 문자열을  하나만 열결 할때는 + 연산자를 많이 사용한다\
// 문자열과 문자열을 더하는 것  ...,concat(),+
