// 상태관리를 해야할것
// 영화찾아오기 ,로그인

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers"; //index는 대표이기 때문에 생략 가능하다

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  //composeWithDevTools릃 활용해 reducer들을 실시간 모니터링 할 수 있게 해주었다
  //applyMiddleware(thunk)를 활용해 thunk 란느 middleware를 적용할 수 있게 되었다
);

export default store;
