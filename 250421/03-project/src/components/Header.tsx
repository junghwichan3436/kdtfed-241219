import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Gnb = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
`;

const Header = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <Container>
      <Gnb>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Button onClick={onAboutClick}>About</Button>
        </ListItem>
      </Gnb>
    </Container>
  );
};

export default Header;
