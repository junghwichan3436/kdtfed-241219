import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";
import Board from "./Board";

const Container = styled.div`
  /* max-width: 1200px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #fff; */
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setToDos((oldTodos) => {
        const sourceBoard = [...oldTodos[source.droppableId]];
        const destinationBoard = [...oldTodos[destination.droppableId]];
        const taskObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...oldTodos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default ToDoList;
