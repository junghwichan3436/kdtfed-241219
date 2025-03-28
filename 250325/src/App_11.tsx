import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { exit } from "process";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 250px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: var(--light-color);
  border-radius: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 30px; */
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: var(--circle-color);
  /* border-radius: 50px; */
  box-shadow: inset 0 10px 20px rgba(0, 0, 0, 0.3);
`;

//여기부분 공부하기
function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? <Circle layoutId="circle" style={{ scale: 2 }} /> : null}
      </Box>
    </Wrapper> // layoutId를 같은 걸 부여하는 순간 같은 것이 된다
  );
}

export default App;
// 최초에마운트가 된순간엔 true가되야되냐 !연산자를 붙여준다
