import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
//부모밑에 자식요소 컴포넌트가 있어야한다
function App() {
  const name = "David";
  return (
    <div className="App">
      <Header />
      <Body name={name} />
      <Footer />
    </div>
  );
}

export default App;

// name이라는 껍대기안에 우리가정의한 name을 넣어준다
//name이라는 껍대기로 name을 찾아올 수있다
//리액트에서는 구조분해할당이 많이쓰인다
//컴포넌트에 수많은 값을 넣어준다
//
