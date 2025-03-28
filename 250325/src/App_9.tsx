import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { exit } from "process";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 180px;
  /* display: none; */
`;

const BoxList = styled.div`
  display: flex;
  gap: 20px;
`;

const box = {
  initial: (back: boolean) => ({
    //타입스크립트이기 때문에 back에대해 정의를 명확하게 해주어야한다
    x: back ? -500 : 500, //back이 true면 -500에서 대기 반대는 500에서 대기
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transiton: {
      duration: 0.5,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transiton: {
      duration: 0.5,
    },
  }),
};

//여기부분 공부하기
function App() {
  const [visible, setVIsible] = useState(1);
  const [back, setBack] = useState(false); //뒤로가기 버튼
  const [isAnimating, setisAnimating] = useState(false);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const prevPlease = () => {
    if (isAnimating) return;
    setBack(true);
    setVIsible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlease = () => {
    if (isAnimating) setBack(false);
    setVIsible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <Wrapper>
      <AnimatePresence
        mode="wait"
        custom={back} //custom 속성 중요!!!
      >
        {arr.map((i) =>
          i === visible ? (
            <Box //컴포넌트가 바뀌어진다는것은 키가 바뀌어진다는 것과 같고 그건 리랜더링이된다
              custom={back} //위에서 주었기 때문에 아래서 custom을 쓸 수 있다
              key={visible}
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              onAnimationComplete={() => setisAnimating(false)}
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <BoxList>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
      </BoxList>
    </Wrapper>
  );
}

export default App;
