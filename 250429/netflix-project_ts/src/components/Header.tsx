import { useState, useEffect } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";

const Nav = styled(motion.div)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  /* background: ${({ theme }) => theme.black.veryDark}; */
  color: ${({ theme }) => theme.red};
  font-size: 1.8rem;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

// 로고에 모션값을 넣을때 무조건 (motion.""을 넣어야 한다.)
const Logo = styled(motion.svg)`
  width: 110px;
  fill: ${({ theme }) => theme.red};
  path {
    stroke-width: 10px;
    stroke: ${({ theme }) => theme.white.darker};
  }
  cursor: pointer;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  cursor: pointer;
  /* color: ${({ theme }) => theme.white.darker}; */
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
    /* color: ${({ theme }) => theme.white.lighter}; */
  }
`;

const Circle = styled(motion.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  margin: 0 auto;
  background: ${({ theme }) => theme.red};
`;

const Search = styled.form`
  height: 20px;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 10px 15px;
`;

const Magnifying = styled(motion.svg)`
  width: 18px;
  /* fill: ${({ theme }) => theme.white.darker}; */
  cursor: pointer;
  transform-origin: right center;
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  padding: 6px 8px;
  border: none;
  border-radius: 3%;
  &:focus {
    outline: none;
  }
`;

const logoVariants = {
  normal: { fillOpacity: 1 },
  active: {
    fillOpacity: [1, 0.6, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop" as "loop",
      // repeatType: "loop"을 단순 문자열로만 인식을 해서 loop기능을 사용하라는 타입단언을 해줘야 한다.
      ease: "easeInOut",
    },
  },
};

interface IForm {
  keyword: string;
}

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation(); // animate함수가 작동되게 상단에서 자동으로 컨트롤
  const navAnimation = useAnimation();
  const magnifyingAnimation = useAnimation();
  const main = useNavigate();
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    main(`/search?keyword=${data.keyword}`);
    setValue("keyword", "");
  };

  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
      magnifyingAnimation.start({
        x: 160,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
      magnifyingAnimation.start({
        x: 0,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  const gotoMain = () => {
    main("/");
  };

  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  const modalMatch = useMatch("/movies/*");
  // * 전체선택자 -> 해당역할의 어떤것이 오든간에 다 포함하겠단 의미

  const { scrollY } = useScroll();

  // theme 프로바이더를 쓸수 있는 useTheme효과
  // 새로운 발견
  const theme = useTheme();

  const navVariants = {
    top: {
      background: theme.black.darker,
      color: theme.white.darker,
    },
    scroll: {
      background: theme.white.darker,
      color: theme.red,
    },
  };

  // 스크롤 효과 80을 기준으로 스타일효과 적용
  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        inputAnimation.start({
          color: theme.red,
        });
        magnifyingAnimation.start({
          fill: theme.red,
        });
      } else {
        navAnimation.start("top");
        inputAnimation.start({
          color: theme.white.darker,
        });
        magnifyingAnimation.start({
          fill: theme.white.darker,
        });
      }
    });
  }, [scrollY]);
  // 스크롤 이벤트 트리고 변하게 된다면 즉각적으로 리랜더링 해서 생애주기 관리
  return (
    <>
      <Nav
        variants={navVariants}
        animate={navAnimation}
        transition={{ type: "linear" }}
        initial={{ background: "rgba(0,0,0,1)", color: theme.white.darker }}
      >
        <Col>
          <Logo
            onClick={gotoMain}
            variants={logoVariants}
            initial="normal"
            whileHover="active"
            width="594.72009pt"
            height="150pt"
            viewBox="0 0 594.72011 149.99999"
          >
            <path
              fill="#ff143d"
              d="M271.344 4.418h49.603v139.08h-49.603ZM0 45.915h35.657v97.583h47.979V45.915H119.3V4.418H0ZM213.497 4.418 183.8 96.69c-.88 2.745-4.942 2.112-4.942-.778V4.418H131.69v139.08h86.586L265.29 4.418Zm205.246 0v58.103c0 2.677-3.608 3.523-4.797 1.129L384.608 4.418h-46.875v139.08h45.584V85.71c0-2.676 3.609-3.523 4.797-1.12l29.193 58.907h46.884V4.418Zm103.482 83.56V57.603c0-7.695 3.062-13.356 10.441-15.28 7.901-2.06 15.195 2.967 17.675 11.193l43.626-23.352C576.771-1.191 544.603-.772 531.734.365c-13.177 1.172-26.679 5.148-38.624 15.375-11.929 10.192-17.564 26.832-17.564 44.378l-.008 27.397c0 26.106 10.287 43.516 28.081 53.691 30.664 17.546 73.692 5.584 91.101-7.661V66.787h-45.046v41.668c-6.387 2.48-27.448 5.328-27.448-20.479"
            />
          </Logo>
          <Items>
            <Item>
              <Link to="/">Home</Link>
              {homeMatch && <Circle layoutId="circle" />}
              {modalMatch && <Circle layoutId="circle" />}
            </Item>
            <Item>
              <Link to="/tv">TV Shows</Link>
              {tvMatch && <Circle layoutId="circle" />}
            </Item>
          </Items>
        </Col>
        <Col>
          <Search onSubmit={handleSubmit(onValid)}>
            <Magnifying
              onClick={toggleSearch}
              // animate={{ x: searchOpen ? 0 : 160 }}
              animate={magnifyingAnimation}
              transition={{ type: "linear" }}
              initial={{ fill: theme.white.darker }}
              // 기본값으로 반동이 들어가있는 효과가 있기때문에 스무스한 느낌을 주려면 이렇게 하면 된다.
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </Magnifying>
            <Input
              {...register("keyword", { required: true, minLength: 2 })}
              type="text"
              animate={inputAnimation}
              initial={{ scaleX: 0 }}
              transition={{ type: "linear" }}
              placeholder="Search for Contents"
            />
          </Search>
        </Col>
      </Nav>
    </>
  );
};

export default Header;
