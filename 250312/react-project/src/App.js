import "./App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  // const BodyProps = {
  //   name: "David",
  //   location: "서울시",
  //   // favorList: ["파스타", "빵", "떡볶이"],
  // };
  const ChildComp = () => {
    return <div>Child component</div>;
  };
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      {/* 컴포넌트 안에 컴포넌트를 보내고 싶을때 사용 */}
      {/* <Body {...BodyProps} /> */}
      {/* //name이랑 location의 값을 따로 보내주어 쓸수  있게해준다 */}
      <Footer />
    </div>
  );
}

export default App;
