// const str = "hello";
// console.log(str.length);

//문자열은 유사배열이다
// console.log(str.length); //문자열의 아이탬개수를 의미한다

// const str = "Good Morning!";
// console.log(str.length);
// G가 0번째 인덱스 값이다 빈칸도 인덱스값으로 친다 총 13개가 나온다
// charAt(3)
// 위치를 파악하고 싶을때(()안에 있는 번째의 인덱스 값을 찾아 올때 사용한다)
// 둘다 같다
// console.log(str.charAt(3)); //먼저 나온 문법
// console.log(str[3]); // 나중에 나온 문법

// 실습

const string = prompt("문자열을 입력하세요");
const letter = prompt("어떤 문자를 체크하시겠습니까?");

const counting = (string, letter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt[i] === letter) count += 1; //charAt[i]와 [i]는 같다
  }
  return count;
};

const result = counting(string, letter);
document.write(`${string}에는 ${letter}가 ${result}개 있습니다`);
