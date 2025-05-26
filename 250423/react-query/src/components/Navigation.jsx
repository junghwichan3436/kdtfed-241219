import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background: var(--navigation-color);
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const Navigation = () => {
  return (
    <Container>
      <Link to="/">Homepage</Link>
      <Link to="/react-query">React-Query</Link>
      <Link to="/react-query">NomalPage</Link>
    </Container>
  );
};

export default Navigation;
