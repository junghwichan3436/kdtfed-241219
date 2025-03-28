import styled from "styled-components";
import { delay, motion, stagger } from "framer-motion";
import { start } from "repl";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: {
    backgroundColor: "rgb(46,204,50)",
    transition: { duration: 10 },
  },
};

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

function App() {
  const biggerRef = useRef(null);
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover={"hover"}
        whileTap={"click"}
        whileDrag={"drag"} //whileDrag를 쓰면 속성에 drag를 넣어주어야  돌어간다
        //호버하는 동안에
      />
    </Wrapper>
  );
}

export default App;
