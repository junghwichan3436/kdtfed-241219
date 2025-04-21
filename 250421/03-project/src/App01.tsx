import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* Header는 경로가 바뀌어도 항상 존재 */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 동적경로가 존재하지 않을땐 Home이라는 컴포넌트를 주세요 */}
        <Route path="/about" element={<About />} />
        {/* 동적경로가 /about일땐 About이라는 컴포넌트를 주세요 */}
      </Routes>
    </BrowserRouter>
  );
}
// Outlet 전체 관리 툴

export default App;
