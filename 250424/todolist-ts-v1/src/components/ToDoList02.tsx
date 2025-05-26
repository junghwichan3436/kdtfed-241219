import { useForm } from "react-hook-form";

const ToDoList = () => {
  const { register, watch } = useForm();
  console.log(watch()); // watch는 사용자가 입력한 값을 확인한다
  return (
    <div>
      <form>
        <input {...register("toDo")} type="text" placeholder="Write a Todo" />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default ToDoList;
