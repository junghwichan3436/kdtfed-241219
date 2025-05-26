import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/reducer";

const Container = styled.div`
  & input[type="text"] {
    margin-bottom: 20px;
    padding: 8px;
    font-size: 1.6rem;
    &::placeholder {
      font-size: 1.6rem;
    }
  }
  & button[type="submit"] {
    width: 100%;
    padding: 8px;
    font-size: 1.6rem;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContactHandler = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber) return alert("정상적인 값을 입력해주세요!");
    dispatch(addContact({ name, phoneNumber })); //action객체를 준다
    setName("");
    setPhoneNumber("");
    return (
      <Container>
        <Form onSubmit={addContactHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>이름</Form.Label>
            <Form.Control
              value={name}
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>전화번호</Form.Label>
            <Form.Control
              value={phoneNumber}
              type="text"
              placeholder="전화번호를 입력해주세요"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            추가
          </Button>
        </Form>
      </Container>
    );
  };
};
export default ContactForm;
