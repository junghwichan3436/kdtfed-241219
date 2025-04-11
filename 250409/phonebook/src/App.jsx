import GlobalStylesStyles from "./GlobalStyles.styles";
import { Container, Row, Col } from "react-bootstrap";

const Title = styled.h1`
  text-align: center;
  margin: 100px 0;
  font-size: 3.2rem;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Title>연락처</Title>
    </>
  );
}

export default App;
