import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categorystate } from "../atoms";

interface IForm {
  toDo: string;
}

//굳이 쓰지도 않는 toDos를 가지고 있을필요가 없다!!!
const CreateToDo = () => {
  const category = useRecoilValue(categorystate);
  const setToDos = useSetRecoilState(toDoState);
  //useRecoilState는 atoms안에 관리되어진 스테이트만 값으로 가져온다
  const { register, handleSubmit, setValue } = useForm<IForm>();
  //타입정의 된 IForm을 제네릭 형태로 인자값으로 넣으면 아래에서 다 사용가능하다
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      //서로다른 배열을 하나의 배열로 만든다 concat, ...전개연산자
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]); //default: [],값을 찾아온다
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Write Here",
        })}
        type="text"
        placeholder="Write a Todo"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;
