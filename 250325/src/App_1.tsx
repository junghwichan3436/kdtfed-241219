import styled from "styled-components";
import { motion } from "framer-motion";
import { start } from "repl";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  //모션값을 우선으로 받으면서 스타일 값도 받는다 둘다받는다
  //styled.div 스타일값만받는다
  //motion.div motion 값만 받는다
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
  // transiton의 값은 독립적으로 쓸 수 없다 항상 end 값에 묻어가야한다
};

function App() {
  return (
    <Wrapper>
      {/*<Box transition={{ duration: 3 }} animate={{ borderRadius: "100px" }} />
      //animate는 객체형태로 값을보낸다*/}
      <Box
        variants={myVars}
        transition={{ type: "spring", delay: 0.5 }}
        // mass 값이 크면클수록 무거워진다 무개가 가벼우면 빨리 움직인다
        //damping 중력 ?
        initial={"start"}
        // animate={{ scale: 1, rotateZ: 360 }} 원래 이렇게 주었는데 대신 안에 변수의 값을 넣어 줌으로써 더 편하게 사용가능하다
        animate={"end"}
      />
    </Wrapper> // 사용해야되는 값이 많아 졌을 때 변수에담아서 사용할 수 있다
  );
}

export default App;
