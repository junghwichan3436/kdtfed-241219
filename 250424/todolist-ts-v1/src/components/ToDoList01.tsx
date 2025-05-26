import React, { useState } from "react";

const ToDoList = () => {
  const [toDo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo} //사용자가 입력한 값은 toDo
          onChange={onChange}
          placeholder="Write a Todo"
        />
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
};

export default ToDoList;
