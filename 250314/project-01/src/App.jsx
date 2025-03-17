import React, { useRef, useReducer, useCallback, useMemo } from "react";
import "./App.scss";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

/* State Function */
const reducer = (state, action) => {
  switch (action.type) {
    case "CRERATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

/* Mockup Data */
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Typescript",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Node.js",
    createdDate: new Date().getTime(),
  },
];
//  Context Obj = API Component

// export const TodosContext = React.createContext();
export const TodoStateContext = React.createContext(); //컴포넌트의 역할을 하면서컨텐츠를 하나로 묶어놓고 쓸수있으며 자기만의 속성과 메서드함수를 쓸수 있다
export const TodoDispatchContext = React.createContext();
// 서로가 영향을 미치지 못하게 2개로 만들어 주었다
// todo가 바뀌어도 영향이 바뀌지 않게 하기위해

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = useCallback(() => {
    (content) => {
      dispatch({
        type: "CREATE",
        newItem: {
          id: idRef.current,
          isDone: false,
          content,
          createdDate: new Date().getTime(),
        },
      });
      idRef.current += 1;
    };
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []); //

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);
  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []); //usememo를 사용해 todo의 영향을 받지않게 최적화를 시켜 주었따

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          {/*TodoDispatchContext의 부모가todo라는 상위요소라 리렌더링될수 있지만 메모이제이션을 할수 있게 되었다 */}
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
