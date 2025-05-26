import { combineReducers } from "redux"; //combineReducers함수를 활용해서 묶고싶은 Reducer들을 객체로 담는다
import movieReducer from "./movieReducer";

export default combineReducers({
  movie: movieReducer,
});
