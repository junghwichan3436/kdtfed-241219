import "./App.css";
//이건 함수가 아니라 컴포넌트야 라고 알려줄려면 앞에 대문자
import Header from "./compornents/Header";
import Body from "./compornents/Body";
import Footer from "./compornents/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
