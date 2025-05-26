import React from "react";
import { Container, Button, Form, Nav, Navbar } from "react-bootstrap";
// 이부트스트랩은 공통분모에 어딜들어가도 상관없다
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Wrapper = styled.div`
  &.inner-item {
    padding: 8px 14px;
  }
  &.me-2 {
    padding: 2px 14px;
    font-size: 1.6rem;
    position: relative;
    top: -5px;
  }
  &.button [type="button"] {
    font-size: 1.8rem;
    padding: 2px 14px;
    position: relative;
    top: -5px;
  }
`;

const Logo = styled.img`
  width: 100px;
`;

const BtnItem = styled.span`
  color: var(--light-color);
  transition: color 0.3s;
  &:hover {
    color: var(--accent-color);
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar varient="dark" bg="dark">
        <Container fluid className="inner-item">
          <Navbar.Brand href="/">
            <Logo
              width={100}
              src="https://i.namu.wiki/i/jhSTM_3uBtbDFLNUtKFHUXrDd5qTykASS_pAxaoLUWloONfI-WIlRRoQ1qXMfs3QCydY8fDUbVMyONCZA_AECg.svg"
              alt="log"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <BtnItem>Home</BtnItem>
              </Nav.Link>
              <Nav.Link href="/movies">
                <BtnItem>Movie</BtnItem>
              </Nav.Link>
              <Nav.Link href="/">
                <BtnItem>
                  <BtnItem>Tv</BtnItem>
                </BtnItem>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;
