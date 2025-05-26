import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";

interface DraggingProps {
  isDragging: boolean;
}

const Card = styled.div<DraggingProps>`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background: ${({ theme, isDragging }) =>
    isDragging ? "tomato" : theme.cardColor};
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0, 2px, 5px rgba(0, 0, 0, 0.5)" : "none"};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
  toDoId: number;
}

const DragableCard = ({ toDo, index, toDoId }: IDraggableCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragableCard);
