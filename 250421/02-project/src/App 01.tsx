import React, { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
//GlobalStyle 장점 이안에 들어간 요소들을 리셋 시킨다
//GlobalStyle 과 themeprovier과 합칠수 있다
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.bgColor};
  }
`;

const Conatiner = styled.div``;

function App() {
  const [value, setValue] = useState("");
  //타입스크립트에서 함수의 인자값은 항상 타입정의가 필요하다
  //이벤트는 폼요소를 사용할때 발생하기 때문에 React.FormEvent를 쓰고 boolean num string 뭐가 올지 모르기 때문에 제네릭 형태를 준다
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <GlobalStyle>
      <Conatiner>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          />
          <input type="submit" value="Login" />
        </form>
      </Conatiner>
    </GlobalStyle>
  );
}

export default App;
