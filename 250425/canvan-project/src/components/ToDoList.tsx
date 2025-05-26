import { DragDropContext, DropResult } from "react-beautiful-dnd";
//DragDropContext, Droppable, Draggable이 순서가 무조건 있어야한다
//Droppable, Draggable 아래에는 함수의 반환값의 형태로 들어와야한다
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms";
import Board from "./Board";

const Container = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Board = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.boardColor};
`;
// const Card = styled.div`
//   margin-bottom: 10px;
//   padding: 10px;
//   border-radius: 8px;
//   background: ${({ theme }) => theme.cardColor};
// `;

// const toDos = ["a", "b", "c", "d", "e", "f"];

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(todoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;

    // setToDos((oldToDos) => {
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   copyToDos.splice(destination.index, 0, draggableId);
    //   return copyToDos;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards></Boards>
      </Container>
    </DragDropContext>
  );
};

export default ToDoList;
