import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./reducer";

const store = configureStore({ reducer: contactReducer }); // configureStore로 바뀌면 객체형식으로 타입이 바뀐다

export default store;
