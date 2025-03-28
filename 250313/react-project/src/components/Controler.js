import React, { useState } from "react";
import { Value } from "sass";

const Controler = ({ handleSetCount }) => {
  return (
    <div className="buttons">
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </div> //직접호출되지않기 위해 콜백함수 사용 콜백함수는 이벤트가 발생해야 실행된다  그렇기에 콜백함수는 콜 했을 때만 실행된다
  );
};

export default Controler;
