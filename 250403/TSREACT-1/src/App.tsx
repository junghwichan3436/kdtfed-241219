import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import Button from "./components/Button";
import Form from "./components/Form";

const Container = styled.div`
  width: 100%;
  //height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-color);
  overflow: scroll;
`;

interface Post {
  readonly userId: number; //안전하게 readonly처리를 해준다
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [showform, setShowForm] = useState(false);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const ButtonContainer = styled.div`
    position: absolute;
    right: 40px;
    bottom: 40px;
  `;

  useEffect(() => {
    //url주소로 찾아오기
    //setTimeout(() => {
    // setPosts(mockPosts);
    //}, 1000);
    fetch(url) //url로 바꾸어서 객체로 찾아오기
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []); //의존성배열이있는경우 컴포넌트가 마운트가 된시점에 무언가를 하겠다
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {posts.map((post) => (
          <BlogPost key={post.id} title={post.title} body={post.body} />
        ))}
        <ButtonContainer>
          <Button label="등록" onClick={() => setShowForm(true)} />
        </ButtonContainer>
        {showform && <Form onClose={() => setShowForm(false)} />}
        //and단락회로평가 showform 이 true면 form이 나오게 해라
      </Container>
    </>
  );
}

export default App;
