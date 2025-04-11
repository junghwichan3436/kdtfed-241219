import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 32px;
  z-index: 1;
  background: var(--light-color);
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.4rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 4px;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const url = "https://jsonplaceholder.typicode.com/posts";

interface Props {
  readonly onClose: () => void;
}

const Form = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const registerPost = () => {
    if (title === "" || body === "") return; //body와 title의 값이 아무것도을어오지않는 다면 registerPost함수를 종료해라

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId: 1,
        title,
        body,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (typeof onClose === "function") onClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title>블로그등록</Title>
        <InputGroup>
          <Label> Title : </Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            //tittle값을 전달할 수 있게 해준다
            //target안에있는 값을 찾아 올땐 value를 쓴다
          />
        </InputGroup>
        <Input
          value={title}
          onChange={(e) => setBody(e.target.value)}
          //body값을 전달할 수 있게 해준다
          //target안에있는 값을 찾아 올땐 value를 쓴다
        />
        <InputGroup>
          <Label> Body : </Label>
          <Input />
        </InputGroup>
        <Actions>
          <Button
            label="등록하기"
            onClick={registerPost}
            //onClick 씀으로써 등록하기를 눌렀을 때 창이 닫혀진다
          />
          <Button label="닫기" color="#304ffe" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  );
};

export default Form;
