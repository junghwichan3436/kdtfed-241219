import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import {
  delay,
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
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
`;

const toggleShowing = styled(motion.div)``;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 1,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
};

function App() {
  const [showing, setShowing] = useState(false); // true 가되면 박스가 생기고 false가 되면 사라진다
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <Box // 박스의 상태를 관리하기위햇 useState를 찾아온다
      //mount unmount 된시점에서 무언갈 해 라고 할 수 있다
      />
    </Wrapper>
  );
}

export default App;
