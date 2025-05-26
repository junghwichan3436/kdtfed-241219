import React from "react";
import { IToDo, toDoState, Categories } from "../atoms";
//atom는 IToDo의 값의 text 값을 정의해놔서 atom에서 가져온다
import { useSetRecoilState } from "recoil"; // useSetRecoilState 버튼을 눌렀을 때 ToDOSate에서 값을 바꿔준다

//자료구조 & 알고리즘
// const food = ["pizza", "mango", "kimchi", "kimbab"];
// const front = ["pizza"];
// const back = ["kimchi", "kimbab"];
// const final = [...front, "gam", ...back];
//slice 사용해서 연습하기

const ToDo = ({ text, category, id }: IToDo) => {
  // const onClick = (newCategory: IToDo["category"]) => {
  //IToDo의category를 대괄호 표기법으로 가져온다
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex]; //하나하나 찾아오도록 인덱스 값을 찾아온다!!!
      const newToDo = { id, text, category: name as any }; //id와 text는 건들지말고 category만 name 으로 바꿔준다

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  }; //findIndex 앞에붙은 이터러블한 객체를 찾아서 연산후 참인 인덱스 값만 찾아온다
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TODO && (
        <button name={Categories.TODO + ""} onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ""} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ""} onClick={onClick}>
          Done
        </button>
      )}
      {/* atoms에서 todo값을 정의해주고 아닌것 버튼이 두개 뜬다 */}
    </li>
  );
};

export default ToDo;
