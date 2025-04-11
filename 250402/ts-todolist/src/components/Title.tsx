import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 16px 0;
`;

const Label = styled.h1`
  font-size: 2.4rem;
`;

interface Props {
  readonly label: string;
}

const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      {/* 할 일목록이란 것을 부모로 부터 받아서 쓰고 있다 */}
    </Container>
  );
};

export default Title;
