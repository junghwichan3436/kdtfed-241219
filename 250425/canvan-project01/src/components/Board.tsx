import { useForm } from "react-hook-form";
import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import DragableCard from "./DragableCard";
import { ITodo, toDoState } from "../atoms";

const Container = styled.div`
  width: 100%;
  min-width: 400px;
  height: 100%;
  min-height: 400px;
  padding: 20px;
  padding-top: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.boardColor};
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-bottom: 1px solid var(--border-color);
  background: transparent;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Area = styled.div<IAreaProps>`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  background: ${({ isDraggingOver, isDraggingFromThis }) =>
    isDraggingOver ? "pink" : isDraggingFromThis ? "crimson" : "dodgerblue"};
  transition: background 0.3s;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newTodo],
      };
    });
    setValue("toDo", "");
  };
  return (
    <Container>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder="Write Here"
        />
        <Button>Click</Button>
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragableCard
                key={toDo.id}
                index={index}
                toDo={toDo.text}
                toDoId={toDo.id}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Container>
  );
};

export default Board;
