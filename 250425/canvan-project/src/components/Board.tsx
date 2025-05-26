import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import DragableCard from "./DragableCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.boardColor};
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Container ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DragableCard key={toDo} index={index} toDo={toDo} />
          ))}
          {magic.placeholder}
        </Container>
      )}
    </Droppable>
  );
};

export default Board;
