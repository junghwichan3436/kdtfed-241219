import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ bgColor }) => bgColor};
`;

// const BoxTwo = styled.div`
//   width: 100px;
//   height: 100px;
//   background: ${({ bgColor }) => bgColor};
// `;

const Circle = styled(Box)`
  border-radius: 50px;
`; // style컴포넌트는 상속받을 수 있고 거기서 또 값을 수정할 수 있다!!

// const Text = styled.span`
// const Text = styled.span`
//   width: 100%;
//   height: 100%;
//   color: #fff;
//   display: inline-block;
//   text-align: center;
//   line-height: 100px;
// `;

function App() {
  return (
    <Container>
      <Box bgColor={"teal"} />
      <Circle bgColor={"tomato"} />
    </Container>
  );
}

export default App;
