import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  background: ${({ required }) =>
    required
      ? "tomato"
      : "#fff"}; //함수의 반환값은 결국 변수의 형태로 들어올 것 이니까
  //스타일 컴포넌트는 props를 받을 수 있으니까 가능하다
  //참이냐 거짓이냐로 나눌 수 있다
`;

function App() {
  return (
    <Container>
      <Input required="true" />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App;
