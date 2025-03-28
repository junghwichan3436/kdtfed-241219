import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 255);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 1,
    borderRadius: "100px",
  },
};

function App() {
  const biggerRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerRef}>
        <Box
          drag
          dragSnapToOrigin //원래 있던자리로 돌아오게 만들기
          dragElastic={1} //
          dragConstraints={biggerRef}
          //음수값은 범위가 더 넓어지고 양수값은 범위가 줄어든다
          //drag="x" //x축으로만 드래그 된다
          //항상 어디서 써 먹을 지 생각해
          variants={boxVariants}
          whileHover={"hover"}
          whileTap={"click"}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
