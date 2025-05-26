import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.cardColor};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const DragableCard = ({ toDo, index }: IDraggableCardProps) => {
  console.log(toDo, "has been rerendered");

  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic) => (
        <Card
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

// <Draggable draggableId={toDo} index={index}>
//   {(magic) => (
//     <Card
//       ref={magic.innerRef}
//       {...magic.draggableProps}
//       {...magic.dragHandleProps}
//     >
//       {toDo}
//     </Card>
//   )}
// </Draggable>;

export default React.memo(DragableCard);
// 자식요소의 스테이트 값이 변경되지않으면 리렌더링 되지 않게 하겠다
// 컴포넌트를 강화한다
