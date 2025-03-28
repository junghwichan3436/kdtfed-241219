import React, { useState, useEffect, useReducer } from "react";

const CompA = () => {
  console.log("컴포넌트가 호출되었습니다."); //횡단관심사 대상
  return <div>CompA</div>;
};
const CompB = () => {
  console.log("컴포넌트가 호출되었습니다."); //횡단관심사 대상
  return <div>CompB</div>;
};
//고차컴포넌트를 만드는 방식
//고차컴포넌트화 하고싶은 대상을 인자값으로 데려온다 = 강화시키고픈 대상
// useEffect 마운트 외었을때  return이 나왔을 때 원래 cleanup함수 인데
//강화함수라 부르다
const withLifeCycle = (WrapperComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("Mount!");
      return () => console.log("Unmount!"); //unmount가 된시점에서만 띄워줘
    }, []);
    useEffect(() => {
      console.log("Update!"); // Update가 된시점에서만 띄워줘
    });

    return <WrapperComponent {...props} />; //WrapperComponent 가 {...props} 강화요소를 받는다
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      state;
  }
};

const TestComp = () => {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  /* 상태 변화 코드 함수 */
  // const onIncrease = () => {
  //   setCount(count + 1);
  // };

  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 초기화</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
