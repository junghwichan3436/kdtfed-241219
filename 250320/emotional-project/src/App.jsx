import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//마운트된 첫시점에 무언가를 한다 useEffect

//목업데이터 는 객체
const MockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state]; // 서로다른 배열의 값을 풀어서 하나로 만들었다!!
    }
    case "UPDATE": {
      return state.map(
        () =>
          String(it.id) === String(action.data.id) ? { ...action.data } : it //각각의 아이템을 map이라는 메서드함수로 끄집어와서 반복순회한다음에 다시새로운 배열로 반환시킨다
        //해석:며칠자 일기를 수정하고 작성하기를 눌렀는데 최초생성된 아이디값하고 해당요소의아이템의 아이디가같으면 그요소가 같은애만 다시 업데이트를 해서 넣을 거고 아니면 원본데이터를 유지하고 그 값을 반환 하겠다!!
      );
    }
    case "DELETE": {
      //삭제의 기능을 filter로 구현한다
      return state.filter((it) => String(it.id) !== String(action.targetId));
    } // 선택되지않은애만 배열로 정해서빼주고 참인애들이 나올테니 참인애들을 빼준다 참:targetId값과 같지않은애들만 구분해서 배열로 나타낸다
    default: {
      return state; //반환을 해주어지 data 에서 값을 쓸 수 있다
    }
  }
};

export const DiaryStateContext = React.createContext();
//createContext 메서드를 활용한 컴포넌트는
export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false); //마운트되기전엔 끌어오지 않았으니까 false 값을 준다 ,최초에 초가화할때
  const [data, dispatch] = useReducer(reducer, []);
  let idRef = useRef(0); //idRef 숫자 0을 가지고 있는객체가 된다

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: MockData,
    });
    setIsDataLoaded(true);
  }, []);
  //onCreate 신규값이 생성된다
  const onCreate = (data, content, emotionId) => {
    //dispatch는 액션객체를 전달한다
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content, //키와 벨류의 값이 같으면 하나는 생략가능
        emotionId,
      },
    });
    idRef += 1;
  };

  const onUpdate = (targetId, data, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    //삭제를 하고싶은 아이디값만 찾아오면됨
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  if (!isDataLoaded) {
    //데이터가 로딩중인상황이다
    return <Loading>데이터를 불러오는 중입니다!</Loading>;
  } else {
    return (
      <>
        <GlobalStyles />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onUpdate, onDelete }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
    );
  }
}
// disptch 상태변화촉발함수
export default App;
// useReducer
//해당컴포넌트 바깥에서 관리한다

// action 이 값을 받아서 함수를 받아 state로 넘겨주고 state가 data롤 넘겨 주어 값을 안에서 쓸수 있다
//useref
