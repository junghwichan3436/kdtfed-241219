// 배열 관련 예제
// concat()
// slice() 특정아이템추출 숫자를 찾아와서 그 앞 숫자까지 찾아옴
//splice() 특정아이템 추출 첫번째인자값 부터 두번째인자값의 개수 까지 원본배열 수정 편집
//sort() 정렬 이진수 이진법 사용하기 때문에 기본적으로 오름차순 정렬 뱔더의 콜백함수를 줘서 오름차순
//pop() 배열 뒤에서부터 제거
//push() 배열 뒤에서부터 ㅜ추가
//shift() 배열 앞에서 부터 제거
//unshift() 배열 앞에서 부터 추가

//map() 새로운 배열로 다시 반환한다
// for 문은 단순 반복만하고 배열값으로 다시 반환하지 않는다
//filter()
//find()

// for문
const numbers = [1, 2, 3, 4, 5];
//순회하며 값이 들어온다
numbers.forEach((number) => {
  console.log(number * 2);
});
//하나의 배열이 아니다
//배열로 반환시켜주지 않고 값을 가지고 오고 끝낸다
// for문 두번째로 들어올 값을 index값 세번째는 배열값
// map함수
const newNumbers = numbers.map((number, index, array) => number * 2 + index);
console.log(newNumbers);
// 다중 패러다임의 문법을 가지고 있기 때문에 중괄호와 return을 "생략"해줄수 있다
//  index는 자식요소들의 인덱스 값을 의미한다
// ---------------------------------------------------

// filter 함수
// 내가 원하는 조건에 부합하는 복수의 값을 찾아서 새로운 배열로 반환하고 싶을 때 사용!!
//만약에 부합하는 값이 존재하지 않는 경우 = 조건이 충족되지 않는 다면, 빈배열 값을 반환!!
const scores = [60, 35, 64, 68, 45, 52];

const highScores = scores.filter((score) => score >= 85);
console.log(highScores);

// find
// 내가 찾고자 하는 값이 나타나는 순간 해당 메서드 함수는 종료를 시킨다 명확하게 찾고자 하는 값이 단일값인경우 find를 쓴다

const names = ["kim", "park", "lee", "park"];
const result = names.find((name) => name === "park");
console.log(result);

//filter VS find
//filter 의 경우, 반환값을 배열 형태의 자료구조로 가져오는 반면,find의 경우,반환갑을 문자열로 반환

//2) filter의 경우, 반환값이 존재하지 않는 경우, 빈배열로 반환하는 반면, find의 경우 , undefined로 값을 반환

//3) filter의 경우, 복수값의 값을 찾아와서 배열로 반환하는 목적을 가지고 있기 때문에 해당 조건에 부합하는 값들을 모두 찾아 옶니다. 반면, find의 경우, 명확하게 1개의 단일 값을 찾아오고자 하는 목적을 가지고 있기 때문에 하나의 값을 찾는 순간 해당 함수의 명령 및 실행은 종료!!

// reduce() 함수
// 누산기 : 누적계산기
// 1부터 5까지 모든숫자의 합계산하기
// 두가지의 인자값을 받는다
const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers.reduce((total, current) => total + current, 0);

console.log(result01);
