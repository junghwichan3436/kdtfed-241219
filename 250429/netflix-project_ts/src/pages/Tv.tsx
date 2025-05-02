import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
  height: 200vh;
  background: ${({ theme }) => theme.black.darker};
`;

const Tv = () => {
  return <Container>Tv</Container>;
};

export default Tv;
