// const arr = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
//위에걸 커스터마이징 한다
//명령형 프로그래밍 : what 결과를 중요시한다
// 선언형 방식 : How 과정을 중요시한다
// 장점: 커스터마이징이 가능하다 , 디버깅이 가능하다
//선언형 방식이 더 고급형 프로그래밍이다
//아래코드는 선언형 방식이다
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

const arr2 = [1, 2, 3];

//명령형 방식 => How 결과 어떻게 하면 간단하게 결과만 찾을까
arr2.forEach((it) => console.log(it));

//선언형 방식 => what 무엇을 하기위해 어떤 방식으로 해야 할까?
const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

forEach(arr2, (item) => console.log(item));

//const arrN = map(arr, (it) => it * 2);
//console.log(arrN);

// 꼭기억할것 
// 1.표현식문 vs 실행문 => 다중패러다임
// 2.명령형 vs 선언형
