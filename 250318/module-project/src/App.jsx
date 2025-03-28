import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import MainPage from "./components/PAGES/MainPage";
import PostWritePage from "./components/PAGES/PostWritePage";
import PostViewPage from "./components/PAGES/PostViewPage";

const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
        //포스트뒤에 아이디값이 가변적으로 바뀔수 있다 //포스트 라는 공통적으로
        같지만 가변적으로 바뀔수 있어서 앞에 콜론을 주었따
      </Routes>
    </BrowserRouter>
  );
}

export default App;
