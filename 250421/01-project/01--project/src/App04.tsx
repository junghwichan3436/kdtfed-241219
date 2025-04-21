import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

//@keyframes역할을 한다
//rotationAnimation을 정의하고 사용하기 위해선 템플릿 리터럴 방식으로 사용가능하다!!
const rotationAnimation = keyframes`
  0%{
transform: rotate(0deg);
border-radius: 0%;
  }50%{
    transform: rotate(360deg);
    border-radius: 70px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 100px;
  }

`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  //rotationAnimation 을 템플릿 리터럴 방식으로 가져왔다!!
`;

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;
