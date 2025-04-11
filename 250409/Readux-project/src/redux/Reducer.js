//연산작업이이루어지는 곳 기본적으로 초기값이 필요하다
let initialState = {
  //초기값 설정 리액트기본자료구조의 형태가 객체이므로 객체로 가져온다
  count: 1, //초기값은 1
  id: "",
  password: "",
};

// 연산처리한값을 Store로 보낼려면 return처리를 할 함수가 필요하다
// action객체는 useDispatch가 만든다
const reducer = (state = initialState, action) => {
  // //state는 기본매개변수로 state값을 정의해논다 action 객체를 두번째 인자값으로 받는다
  // // return이 없으면 store는 아무값도 받지 못한다
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 }; //초기값이 5개가 들어와서 다른 변경되어진 값만 변경되야 되기 때문 에 값을 풀어해치고 변경되어지는 값만 변경시킨다는 말
  // } //초기값으로 값을 보내기위한 return 이다
  // return { ...state };
  //아래 내용과 위내용과 같다
  switch (action.type) {
    case "INCREAMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREAMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password, //전개연산자 구문을 사용하여 count값은 빼고 아이디와 패스워드의 값만 반환하겠다
      };
    default:
      return { ...state };
  }
};

export default reducer;
