import { createSlice } from "@reduxjs/toolkit";

let initialState = { contactList: [], keyword: "" };

// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "ADD_CONTACT":
//       return {
//         ...state,
//         contactList: [
//           ...state.contactList,
//           {
//             name: payload.name,
//             phoneNumber: payload.phoneNumber,
//           },
//         ],
//       };

//     case "SEARCH_BY_USERNAME":
//       return {
//         ...state,
//         keyword: payload.keyword,
//       };

//     default:
//       return { ...state };
//   }
// };

// export default reducer;

const contactSlice = createSlice({
  //안에 객체형태로 인자값을 받고 이름을 정의하고 기본초기값을 2번째로 받고 3번째로 우리가 호출할 함수가 들어온다
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      //case값으로 정했던애를 아예함수로 만든다
      //reducer때는 부모가값을 받았지만 애는 본인이 받는다
      //...state로 썻지만 초기값이 들어와있기때문에 이렇게 않써도 된다
      state.contactList.push({
        name: action.payload.name,
        phoneNumver: action.payload.phoneNumver,
      });
    },
    searchByusername(state, action) {
      state.keyword = action.payload.keyword;
    }, //또 state와 action값을 받는다
  },
});

console.log("test :", contactSlice);

export const contactReducer = contactSlice.reducer;
export const { addContact, searchByusername } = contactSlice.actions;
//contactform에서 쓰기위해 함수를 export 해준다
