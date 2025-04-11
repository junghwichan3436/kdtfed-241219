"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberList {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
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
const numberList = new NumberList([1, 2, 3]);
console.log(numberList);
