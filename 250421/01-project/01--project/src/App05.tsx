import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

//@keyframes역할을 한다
const rotationAnimation = keyframes`
  0%{
transform: rotate(0deg);
border-radius: 0%;
  }50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 100px;
  }

`;

const Emoji = styled.span`
  font-size: 50px;
`;

//해당컴포넌트를 자식요소로 넣고 싶을 때 templete literal문법을 사용해서 넣을 수 있다!!!
const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 50px;
    &:hover {
      font-size: 80px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji>a</Emoji>
      </Box>
      {/* 하나는 박스안에 있으니까 박스의 영향을 받은 것이고 다른 하나는 박스 밖에 있으니까 영향을 받지 않는다 */}
      <Emoji>a</Emoji>
    </Container>
  );
}

export default App;
