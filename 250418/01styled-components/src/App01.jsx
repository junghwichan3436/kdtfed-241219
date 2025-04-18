import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  background: tomato;
  color: #fff;
  border: none;
  border-radius: 14px;
`;

function App() {
  return (
    <Container>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        {/* as 별칭을 부여하여 a태그로 바꾸어주고 href를 사용가능 */}
        Log out
      </Btn>
    </Container>
  );
}

export default App;
