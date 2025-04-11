import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
// 유니온 타입은 항상 특정타입의 다른타입까지 고려해야한다

interface Props {
  readonly toDoList: Array<string>; //이건 문자열을 가지고 있는 배열이야
  readonly onDelete?: (todo: string) => void; //함수를 실행하는 거지 리턴으로 반환하는 건 아닌니가 void
}

const ToDoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }} //undefinded일때 값을 갖지 않기 위해 함수 일때를 정의해주었다
        />
      ))}
    </Container>
  );
};

export default ToDoList;
