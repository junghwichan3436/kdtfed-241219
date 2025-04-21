// import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border: 3px solid ${({ borderColor }) => borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

//container에 대한 제네릭 필요
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "World" }: CircleProps) => {
  // const [counter, setCounter] = useState<number | string>(1); //기본타입추론으로 counter는 1이 된다
  //복수의 타입으로 줄려면 서로소 유니온 타입으로 주면 된다!!
  // setCounter("hello");
  return (
    //함수의 기본매개변수를 주듯이 어떤값이들어ㅇ오지않았을 때 옵셔널값을 줘도 되지만 프랍스 디폴트 값을 주기 위해서 아무것도 들어오지않았을 때 줄 수 있다
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  ); //borderColor가 없는 애는 bg컬러로 대체한다
};

export default Circle;
