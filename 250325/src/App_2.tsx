import styled from "styled-components";
import { delay, motion, stagger } from "framer-motion";
import { start } from "repl";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); //2열을 갖고 각각의 열은 n분의 1을하겠다
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: var(--light-color);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  place-self: center; //place-self 알아두기
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    trnasition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5,
      bounce: 0.5,
      delayChildren: 1, //부모요소의 transition에서 관리할 수 있다
      staggerChildren: 0.5, //자식요소가 0.5뒤에실행
    },
  },
};

const circleVariants = {
  start: {
    scale: 0,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
    // transition: {
    //   type: "spring",
    //   delay: 1,
    //   bounce: 1,
    //   duration: 3,
    // },
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial={"start"} animate={"end"}>
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
