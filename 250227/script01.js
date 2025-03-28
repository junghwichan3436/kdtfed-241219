//중복되는 값을 허용할 것인가, 허용하지 않을 것인가!!
//Map() => 값을 추가하고자 할 때 set()
//Map => 객체와 배열의 장점만 추출을 해왔음
// Set => 배열처럼 단일값으로만 내부 요소를 정의!! (일반배열은 값이 안에 중복되어도 상관없지만 Set은 값이 안에 중복되는 값이 허용 될 수 없다)

const numSet1 = new Set();

numSet1.add("one").add("two").add("three");
//set 이라는 메서드 함수를 썻기때문에 add 라는 메서드함수를 쓴다

console.log(numSet1.has("four"));
console.log(numSet1.has("three"));
console.log(numSet1.size);

console.log(numSet1.keys());
console.log(numSet1.values());
console.log(numSet1.entries());

numSet1.delete("three");

console.log(numSet1);
numSet1.clear();
console.log(numSet1);
