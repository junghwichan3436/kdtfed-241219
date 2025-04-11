//값을 뿌려주는 역할을 하는 곳
import { createStore } from "redux";
import reducer from "./Reducer";

const store = createStore(reducer); //store은 createStore이라는 함수를 받는다

export default store;
