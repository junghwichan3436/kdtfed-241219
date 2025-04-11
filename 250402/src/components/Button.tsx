import React, { Component } from "react"; //슈퍼타입의 클래스 컴포넌트를 찾아온다
import styled from "styled-components";

const Container = styled.button`
  border: none;
  background: var(--button-color);
  color: var(--light-color);
  padding: 8px 16px;
  cursor: pointer;
  transition: opacity 0.3s;
  border-radius: 10%;
  &:hover {
    opacity: 0.8s;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
interface Props {
  readonly label: string; //함부로 바꾸지 못하게 readonly로 막아주기
  readonly onClick?: () => void;
}
//함수형 컴포넌트
{
  /*const Button = ({ label, onClick }: Props) => {
  // props로 들어온애는 항상 객체
  return <Container onClick={onClick}>{label}</Container>;
}; */
}

//클래스형 컴포넌트
class Button extends Component<Props> {
  //어떠한값이 들어올지 모르니까 제네릭 형식으로 값을받는다 || field 이런거 필요한데 react에서는 method 함수만 있으면 된다
  render() {
    const { label, onClick } = this.props;
    return <Container onClick={onClick}>{label}</Container>;
  }
}

export default Button;
//무언갈 받아서 처리할 수 있는 슈퍼 컴포넌트를 가져와서 값이 무엇이들어올지 모르니 제네릭타입을 주고 props에 label과 onclick에 담아서 구현하고자하는 컴포넌트에 담아서 값을 리턴 render함수는 return값이 필요하다
