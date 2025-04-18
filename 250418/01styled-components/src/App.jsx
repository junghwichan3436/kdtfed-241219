import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const rotationAnimation = keyframes`
  from{
    transform: rotate(0deg);
    border-radius: 0;
  }
  to{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  `;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
`;

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;
