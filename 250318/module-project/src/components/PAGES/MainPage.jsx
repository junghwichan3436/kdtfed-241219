import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../LIST/PostList";
import Button from "../UI/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          title={"글작성하기"}
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
          // item.id의 값으로 페이지를 가져오기위해 템플릿 리터럴로 가변적으로 아이디가 들어올수 있게 하였다
        />
      </Container>
    </Wrapper>
  );
};

export default MainPage;
