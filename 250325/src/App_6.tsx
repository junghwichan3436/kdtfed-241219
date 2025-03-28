import { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

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
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

/*

-800 => 2

-400 => 1.5

0=>1

+400 => 0.5

+800 => 0
-800 에서 +800으로 갈려면 usetransform() 이라는 훅 함수가 필요하다!!!

*/

function App() {
  const y = useMotionValue(0);
  const scale = useTransform(y, [-800, 0, -800], [2, 1, 0]); //인자값으로 하나는 필수고 옵셔널한 값은 4개까지들어간다,첫벌째인자값은 변화대상 ,  두번째인자값은 x라는 값의 변환 대상 범위,
  const rotateZ = useTransform(y, [-800, 800], [-360, 360]);
  const background = useTransform(
    y,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238),rgb(0,83,238))",
      "linear-gradient(135deg, rgb(238,0,153),rgb(221,0,238))",
      "linear-gradient(135deg, rgb(0,238,155),rgb(238,178,0))",
    ]
  );
  useEffect(() => {
    scale.on("change", () => console.log(scale.get()));
  }, [y]);
  return (
    <Wrapper style={{ background }}>
      <Box style={{ y, scale, rotateZ }} drag="y" dragSnapToOrigin />
      {/* 해석하기 숙제 */}
    </Wrapper>
  );
}

export default App;
