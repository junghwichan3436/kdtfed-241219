import styled from "styled-components";
import React from "react";

const Container = styled.div``;

const Title = styled.h1``;

interface DummyProps {
  text: string;
  active?: boolean; //옵셔널 프로퍼티 값
}
//active = false ??
const Dummy = ({ text, active = false }: DummyProps) => {
  return <Title>{text}</Title>;
};

const App = () => {
  //event객체의 타입정의
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    alert("Hello");
  };
  return (
    <Container>
      <Dummy text="Hello" />
      <Dummy text="World" active={true} />
      <button onClick={onClick}>Click</button>
    </Container>
  );
};

export default App;
