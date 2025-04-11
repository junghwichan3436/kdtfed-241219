"use strict";
//타입 변수가 2개 필요한 경우
// 들어가는 값과 나오는 값이 달라야한다!!
Object.defineProperty(exports, "__esModule", { value: true });
const swap = (a, b) => {
    return [b, a];
};
// const swapItem = swap("1", 2);
// console.log(swapItem);
const [a, b] = swap("1", 2);
console.log(a, b);
