import { useContext } from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { ToDoListContext } from "../contexts/ToDoListContextProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToDoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
  return (
    <Container>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};

export default ToDoList;
