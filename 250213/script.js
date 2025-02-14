// class => new
//원의 넓이 : 파이 * r 제곱
//r = 반지름 (라디안이 아님)

//원의 둘레 :2 * 파이 * r

const radius = prompt("반지름의 크기는 ?");
// 원의 넓이 구하는 함수
const area = (r) => {
  return Math.PI * r * r;
};
// 원의 둘레를 구하는 함수
const circum = (r) => {
  return 2 * Math.PI * r;
};
// result라는 변수를 만들어서 html에서 result라는 id 속성값을 가져왔따
const result = document.querySelector("#result");
console.log(result);
// result라는 변수에 innerText를 넣어
result.innerText = `반지름 : ${radius},
원의 넓이 : ${area(radius).toFixed(3)} 원의 둘레 : ${circum(radius).toFixed(
  3
)}`;

console.log(area(radius).toFixed(3)); //소수점 3자리수 까지 준다
console.log(circum(radius).toFixed(3));

area(radius);

// 리턴문을 왜 썻는지
// 콘솔에 area(radius)를 왜 썻는지
