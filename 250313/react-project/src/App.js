import { useState, useRef } from "react";
import "./App.scss";
import Controler from "./components/Controler";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {/* //props는객체의 자료형태 key = value */}
      </section>
      <section>
        <Controler handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;

// 하이 휘찬 ~~
