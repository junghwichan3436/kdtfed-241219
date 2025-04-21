import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.div`
  background: tomato;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 6px 14px;
`;

function App() {
  return (
    <Container>
      <Button>Log in</Button>
      <Button as="a" href="https://www.naver.com">
        Log out
      </Button>
    </Container>
  );
}

export default App;
