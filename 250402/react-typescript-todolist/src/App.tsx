import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { ToDoListContextProvider } from "./contexts/ToDoListContextProvider"; //자식요소들에게 무언가를 줄 수 있는 컴포넡느

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
{
  /*
const mockData = ["React 공부하기", "운동하기", "책읽기"];

function App() {
  /const [toDoList, setToDoList] = useState(mockData);/


  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };
  */
  }

  return (
    <>
      <GlobalStyles />
      <Container>
<ToDoListContextProvider>
          <DataView/>
          <InputContainer  />
</ToDoListContextProvider>
      </Container>
    </>
  );
}

export default App;
