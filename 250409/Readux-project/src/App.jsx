import { useDispatch, useSelector } from "react-redux"; //reducer로 값을 보낼 역할을 한다
import "./App.css";
import Box from "../Box";

function App() {
  //간단한 카운터 만들기
  const count = useSelector((state) => state.count); //state의 값을 가져와서 useSelector를 사용해서 app으로 옮겨준다
  const id = useSelector((state) => state.id); // useselector를 사용하여 store의 값을 가져온다
  const password = useSelector((state) => state.id);
  // useselector를 사용하여 store의 값을 가져온다
  const dispatch = useDispatch(); //무언가의 action객체를 받아서 사용할수 있게 만듬
  const inCrease = () => {
    //클릭해서 무언가가 증가한다고 한다면
    dispatch({ type: "INCREMENT", payload: { num: 4 } }); //INCREMENT라는 타입을 갖게 된다면 무언갈 해주세요  이것을 reducer의 두번째인자값인 action으로 인식하낟
    // num : 5를 주면 5씩증가한다
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 4 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "Park", password: "1234" } });
  };

  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{count}</h1>
      <Box />
      <button onClick={inCrease}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;
