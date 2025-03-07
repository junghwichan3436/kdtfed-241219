import React from "react"; //여기안에는 수많은 것이들어 있다

const Body = () => {
  const numberA = 1; //선언부
  const numberB = 2;

  const strA = "Hello";
  const strB = "World";

  const boolA = true;
  const boolB = false;

  const objA = {
    a: 1,
    b: 2,
  };

  return (
    //출력부
    <React.Fragment>
      <h1>Body</h1>
      <h2>{numberA + numberB}</h2> //숫자 넣기
      <h2>{strA + strB}</h2> //문자열 넣기
      <h2>{boolA && boolB}</h2> // 논리형 가능
      <h2>{String(boolA && boolB)}</h2> // 논리형 형변환 가능
      <h2>{String(boolA || boolB)}</h2> // true로 바꾸고 싶다면
      <h2>{objA.a}</h2> //이건 가능!!
      {/* //중괄호를 쓰면 변수값을 끌어올수 있다 */}
    </React.Fragment>
  );
};

export default Body;
