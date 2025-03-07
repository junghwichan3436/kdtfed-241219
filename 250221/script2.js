// 1)배열을 생성하는 첫번째 방법
// const season = [];
// season[0] = "spring";
// season[1] = "summer";

// console.log(season);

// //2) 배열을 생성하는 두번째 방법
// const pets = ["dog", "cat", "mouse"];

// //3) 배열을 생성하는 방법
const fruits = new Array("사과", "복숭아", "포도");
console.log(fruits);

// // 배열의 아이템에 접근 후 값변경!!
// pets[2] = "hamster";
// console.log(pets);

// // for문 이터러블한 객체만 쓸 수 있다
// const colors = ["red", "green", "blue", "white", "black"];

// for(let i =0; i< colors[i])

//forEach 문
//콜백함수 내 인자값이 1~3개까지 입력~~
//1개 :배열 내 개별 아이템
//2개 : 개별 아이템, 개별아이템 그자체의 인덱스
//3개: 개별아이템,인덱스 , 배열 그 자체

// 1개의 인자값
// const animals = ["lion", "bear", "bird"];
// animals.forEach((animal) => {
//   console.log(animal);
// });

// 2개의 인자값
// const animals = ["lion", "bear", "bird"];
// animals.forEach((animal, index) => {
//   console.log(`animals[${index}]: ${animal}`);
// });

// 3개의 인자값
// const animals = ["lion", "bear", "bird"];
// animals.forEach((animal, index, array) => {
//   console.log(`[${array}][${index}]: ${animal}`);
// });

// --------------------------------------------------

//배열이 가지고 있는 주요 메서드 함수 시리즈
// 1.concat() : 서로 다른 배열 혹은 유사배열을 하나의 배열로 합치고자 할 때
//사용할 수 있는 메서드함수

// 인자값으로 들어온걸 찾아올 수 있다

// const vegetable = ["양상추", "토마토", "피클"];
// const meat = ["불고기"];

// const meatBurger = vegetable.concat(meat, "빵");
// 찾아올 ㅅ ㅜ있다

// const meatBurger = [...vegetable, ...meat]; //전개 연산자 구문으로 합치기
// console.log(meatBurger);

// const meatBurger = [...vegetable, ...meat, "빵"]; //빵이들어온다
// console.log(meatBurger);

// const meatBurger = vegetable.concat(meat);

// const meatBurger = [vegetable, meat];
// console.log(meatBurger);

// ----------------------------------------------------

//2.reverse() : 현재 배열 내 아이템 순서를 역순으로 배치하고자 할 때 사용할 수 있는 메서드 함수

// const numbers = [6, 9, 3, 21, 18];
// console.log(numbers);
// console.log(numbers.reverse()); // 역순 재생된다
// --------------------------------------------------------------

// 3.sort() : 배열 안에 있는 아이템들의 값을 정렬하고자 할때 사용할 수 있는 메서드 함수
//기본적으로 작은 값부터 큰 값으로 정렬하는 오름차순의 형태를 띄고 있다!!
//a-z //1-9 이런 식으로
// 정말 중요!!!!!!!!!!!!!!!!!!!!!!!!!!

// const week = ["sun", "mon", "tue"];
// console.log(week.sort());

// const values = [5, 20, 3, 11, 4, 15]; //3 4 5 11 15 20 이렇게 나와야 되는데!!
// const values = [3, 7, 1, 4, 5];
// //우리 눈에는 숫자처럼 보이지만 사실은 문자열이다
// console.log(values.sort());
// console.log(
//   values.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     if (a === b) return 0;
//     //     //위아래가같다
//     return a - b; //이렇게 쓰면 오름차순 정렬이된다!!!!!!!!!!!!
//     return b - a; // 이렇게 쓰면 내림차순 정렬이 된다!!!!!!!!!!!
//   })
// );

// sort는 내부에 custom이 필요하다!!!!!!!!!!

// -----------------------------------------------------------

// 4.pop(), push() :배열 안에 맨 뒤쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드 함수
const animals = ["lion", "bear", "bird"];
console.log(animals);

console.log(animals.pop());
animals.pop();
console.log(animals); // pop() 배열의 뒤쪽에서 부터 값을 제거한다
animals.push("tiger");
console.log(animals); //push() 배열의 뒤쪽에서 부터 값을 넣어준다

// // 5.shift(), unshift() : 배열 안에 맨 앞쪽부터 값을 제거하거나 혹은 추가하고자 할때 사용가능한 메서드 함수

animals.shift();
console.log(animals); //shift() 배열의 앞쪽에서 부터 값을 제거한다
animals.unshift("dog");
console.log(animals); //unshift() 배열의 앞쪽에서부터 값을 넣어준다

// 6.splice() : 배열 내 특정 위치에 있는 아이템 값을 추가하거나 제거하고자 할 때 사용가능한 메서드 함수
//splice(위치,개수)

const subjects = ["html", "css", "js", "ts", "react"];

// console.log(subjects.splice(2)); //2번부터 끝까지 찾아와서!!!!!!!!!!
// 하나만 입력하면 입력한 숫자부터 끝까지 가져와서 지운다!!!!!!!!!
//두개를 입력하면 해당 숫자를 포함한 것,개수만큼 찾아와서 지워준다!!!!!!!!!

// const test = subjects.splice(2, 2);
// console.log(test);
subjects.splice(2, 2);
console.log(subjects);
subjects.splice(2);
console.log(subjects); //
// splice는 해당위치를 포함해서 몇개를 제거하는 역할을 한다 (원본배열의 값을 바꾼다)
//7.slice()
