class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    //push 두개가 다르다? 찾아보기
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}
// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     //push 두개가 다르다? 찾아보기
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// class StringList {
//   constructor(private list: string[]) {}

//   push(data: string) {
//     //push 두개가 다르다? 찾아보기
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

const numberList = new NumberList([1, 2, 3]);
console.log(numberList);
