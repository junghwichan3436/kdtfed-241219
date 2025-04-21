import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.div`
  background: ${({ bgColor }) =>
    bgColor}; //기본적으로 객체자료구조니까 키값으로 넣어서 이게 가능하다!!
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`; //circle은 props로 box의 기본값을 가져온다

const Text = styled.span`
  color: #fff;
`;

function App() {
  return (
    <Container>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato" />
    </Container>
  );
}

export default App;
