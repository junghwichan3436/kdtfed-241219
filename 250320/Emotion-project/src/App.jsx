import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

// 스타일
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 목업데이터는 예시 = 객체 형태로 만들어논 (json처럼)
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
      //처음데이터를 가져올 때 사용
      return action.data;
    }
    case "CREATE": {
      //새로운 일기추가
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
      //서로다른 배열의 값을 풀어서 하나로 만들었다!!
    }
    case "UPDATE": {
      //특정일기 수정
      const newState = state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
      //각각의 아이템을 map이라는 메서드함수로 끄집어와서 반복순회한다음에 다시새로운 배열로 반환시킨다.
      //해석:며칠자 일기를 수정하고 작성하기를 눌렀는데 최초생성된 아이디값하고 해당요소의아이템의 아이디가같으면 그요소가 같은애만 다시 업데이트를 해서 넣을 거고 아니면 원본데이터를 유지하고 그 값을 반환 하겠다!!
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(
        (it) => String(it.id) !== String(action.targetId)
      );
      localStorage.setItem("diary", JSON.stringify(newState));
      //삭제의 기능을 filter로 구현한다.
      return newState;
      // 선택되지않은애만 배열로 정해서빼주고 참인애들이 나올테니 참인애들을 빼준다.
      // 참:targetId값과 같지않은애들만 구분해서 배열로 나타낸다.
    }
    default: {
      return state;
      //반환을 해주어지 data 에서 값을 쓸 수 있다.
    }
  }
};

// 내부컴포넌트를 만든 곳
export const DiaryStateContext = React.createContext();
// createContext함수를 사용해서 변수에 어떠한 값을 부여하려고 만든 부분
// Provider

export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  let idRef = useRef(0);
  //idRef 숫자 0을 가지고 있는객체가 된다
  //onCreate 신규값이 생성된다

  useEffect(() => {
    // dispatch({
    //   type: "INIT",
    //   data: MockData,
    // });
    // setIsDataLoaded(true);
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;

    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date().getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date().getTime(),
        content,
        emotionId,
      },
    });
  };

  // 삭제기능 함수
  const onDelete = (targetId) => {
    //삭제를 하고싶은 아이디값만 찾아오면됨.
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    // 로딩중이거나 값을 찾아오지 못했을때 => 예외처리조항
    return <Loading>데이터를 불러오는 중입니다!</Loading>;
  } else {
    // 데이터가 잘 찾아왔을때 우리는 그 때 이 값을 반환하면 된다.
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

export default App;

// disptch 상태변화촉발함수
// useReducer 해당컴포넌트 바깥에서 관리한다.
// action 이 값을 받아서 함수를 받아 state로 넘겨주고 state가 data롤 넘겨 주어 값을 안에서 쓸수 있다.
