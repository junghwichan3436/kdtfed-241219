import { JSX, useState, createContext, Context } from "react";

interface Context {
  readonly toDoList: string[],
  readonly onAdd: (toDo: string) => void,
  readonly onDelete: (toDo: stirng) => void,
}

//무언가의 값을 받아서 전달할 컴포넌트 역할 ToDoListContext 그역할은 createcontext로 부여받는다
//애가 초기값이고 인터페이스가 초기값을 지정해주는 코드다
 const ToDoListContext = createContext<Context>({ 
  // 명확한 타입정의가 되지않기 때문에 제너릭 형태로 준다
  toDoList: [],
  onAdd:(): => void => {},
  onDelete: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const mockData = ["React 공부하기", "운동하기", "책읽기"];

const ToDoListContextProvider = ({ childen }: Props) => {
  //부모로 부터 값을 받은 ㅣ니까 props를 가지고 있다
  //childen 컴포넌트의 자식요소로 들어오게 되면 자주 쓰인다
  const [toDoList, setToDoList] = useState(mockData);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <ToDoListContext.Provider value={{
      toDoList,
      onAdd,
      onDelete
    }}
    >{ childen }</ToDoListContext.Provider>
  )
};


export {ToDoListContext,ToDoListContextProvider}