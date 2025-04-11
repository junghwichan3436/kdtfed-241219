"use strict";
// //let str = "Hello World!";
Object.defineProperty(exports, "__esModule", { value: true });
// 이세가지 값이 무조건 있게 하고 싶다
//interface 로 생성한 객체를 무조건 사용하고 싶다 했을 때 implements 를 사용한다
//굳이 implements를 쓰면서 옵셔널 프로퍼티를 쓸 이유가없다 implements 쓸 이유가 없다
//해당 implements의 슈퍼타입이 되어지는 요소를 반드시 써야한다
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동가능!`);
    }
}
