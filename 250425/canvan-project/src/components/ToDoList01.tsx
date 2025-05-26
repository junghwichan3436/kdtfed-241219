import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
//useSetRecoilState 값을 찾아와서 변화시킨다
// useSetRecoilState값을 찾아온다
import { minutesState, hourSelector } from "../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToDoList = () => {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
    //문자를 숫자로 바꿀 땐 더하기를 앞에 넣어주면 숫자가 된다
    // 숫자로 바꾸는 또다르 방법은 Number()
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <Container>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        //하단에 있는 값이 변경된다면  onHoursChange가 실행되게 해주세요
        type="text"
        placeholder="Hourse"
      />
    </Container>
  );
};

export default ToDoList;
