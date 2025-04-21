import "styled-components";
//전역에서 값을 줄려고 하면 theme.ts 그치만 error를 뱉기때문에 그것을 선언 해주어야한다 styled.d.ts에다가

declare module "styled-components" {
  // interface 객체형태의 타입을 정의할 때 사용
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
