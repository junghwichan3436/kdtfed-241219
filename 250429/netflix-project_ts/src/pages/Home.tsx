import { useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
// 지역상태 관리 -> 슬라이드 A,B 의 고유 ID로 상태를 관리할때 사용
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
// 애니메이트 프리센스 : 가상돔에서 없어지더라도 효과를 부여할 수 있다.
// 액티브의 단계마다 효과를 걸어줄 수 있다.
import { getMovies, IGetMovieResult } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
`;

const Banner = styled.div<IBgPhoto>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 0 30px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
    url(${({ bgphoto }) => bgphoto}) center/cover no-repeat;
  color: ${({ theme }) => theme.white.darker};
  /* filter: brightness(0.9); */
  position: relative;
`;

const Title = styled.h2`
  font-size: 4rem;
  position: absolute;
  bottom: 40%;
`;

const Overview = styled.p`
  width: 50%;
  font-size: 1.8rem;
  line-height: 1.4;
  letter-spacing: -1px;
  position: absolute;
  bottom: 25%;
`;

const Slider = styled.div`
  width: 100%;
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<IBgPhoto>`
  width: auto;
  border: 1px solid #fff;
  border-radius: 3px;
  height: 200px;
  background: url(${({ bgphoto }) => bgphoto}) center/cover no-repeat;
  cursor: pointer;
  &:first-child {
    transform-origin: left center;
  }
  &:last-child {
    transform-origin: right center;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 15px;
  transition: all 0.3s;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);
  h4 {
    color: ${({ theme }) => theme.white.darker};
    font-size: 1.8rem;
  }
`;

const ModalBox = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  width: 40vw;
  height: 80vh;
  margin: 0 auto;
  background: ${({ theme }) => theme.black.lighter};
`;

const Overlay = styled(motion.div)`
  // 전체적으로 필터가 먹게
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const MovieCover = styled.div<IBgPhoto>`
  width: 100%;
  height: 400px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url(${({ bgphoto }) => bgphoto}) center/cover no-repeat;
`;

const MovieTitle = styled.h3`
  font-size: 2.8rem;
  margin: 20px;
  color: ${({ theme }) => theme.white.lighter};
`;

const MovieOverView = styled.p`
  font-size: 1.8rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.white.lighter};
  margin: 20px;
`;

//인터페이스 공간

interface IBgPhoto {
  bgphoto: string | undefined;
}

// 슬리이더가 나타나는 공간과 과정
// x: window.innerWidth + 10, 해당 화면값 만큼의 너비를 가져라 + (10 - gap)벌리고자 할때 사용
const rowVariants = {
  hidden: {
    // x: 1000,
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    // x: -1000,
    x: -window.innerWidth - 10,
  },
};

// 마우스가 오버되었을때 효과
const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.3, y: -50, transition: { delay: 0.3, type: "tween" } },
};

const infoVariants = {
  hover: { opacity: 1 },
  transition: { delay: 0.3, type: "tween" },
};

const offset = 6;

const Home = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMovieResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });

  // 쿼리값 활용 모달창 활성
  const history = useNavigate();

  const modalMatch = useMatch("/movies/:movieId");

  const { scrollY } = useScroll();

  // 증가할수록 겹치는것 방지
  const toggleLeaving = () => setLeaving((prev) => !prev);

  // 배너클릭시 인덱스 증가
  const inCreaseIndex = () => {
    if (data) {
      //leaving = true 면 종료 (증가x), (움직임x)
      if (leaving) return;
      toggleLeaving();
      // 영화 데이터가 20개이기 때문에 -2를 해준것 18개로 맞추려고 6개씩 3개의줄로 하기 위해서
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  // 모달창이 하나의 주체로 클릭, 원위치 되도록
  const onOverlayClick = () => {
    history("/");
  };

  // 숫자 or 문자로 매칭을 해줘야 한다.
  const clickedMovie =
    modalMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id === Number(modalMatch?.params.movieId)
      // (movie) => movie.id === +modalMatch?.params.movieId! -> +,- 기호로로 숫자로 인식
    );

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          {/* // 배너또한 컴포넌트 이므로 props를 받을수 있다. */}
          <Banner
            onClick={inCreaseIndex}
            bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            {/* // 애니메이션 종료지점의 이벤트 핸드러를 줄수 있다. */}
            {/* // 초기값을 false로 주면서 새로 마운트 되어도 고정되어서 나오는데 true 값은 기차러럼 오->왼으로 나온다. */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {data?.results
                  .slice(2)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      //어느영화를 선택할지 모르기때문에 식별값으로 영화으 id값을 콜백함수로 가져옴
                      onClick={() => onBoxClicked(movie.id)}
                      key={movie.id}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                      // 타입을 문자열로만 받을수 있기때문에 해당 산술연산자로 문자열로 변환(string로 해도 된다.)
                      layoutId={movie.id + ""}
                      // 마우스가 떠났을때 효과
                      bgphoto={makeImagePath(movie.backdrop_path || "", "w500")}
                    >
                      <Info
                        variants={infoVariants}
                        whileHover="hover"
                        transition={{ type: "tween" }}
                      >
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {modalMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                // 이렇게 박스안에 있는 layoutId와 매칭이 된다. params안에
                id값이 있다.
                <ModalBox
                  layoutId={modalMatch.params.movieId}
                  style={{ top: scrollY.get() + 70 }}
                  // 스크롤 기준으로 했기 때문에 어느 위치에서건 모달이 짤리지 않고 뜬다.
                  // px단위는 쓰지 않는다.
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        bgphoto={makeImagePath(
                          clickedMovie.backdrop_path || "",
                          "w500"
                        )}
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;

/*
* 모달창을 띄우기 위해서 어떻게 할것인가?
- 해당 아이템의 id 값을 활용 : 식별하기 위해서
- 식별이 되었다면 추출해서 적용을 해야하는데 그럴땐, 쿼리값을 활용
- 해당 쿼리값을 주소창에 대입해서 화면에 띄울수 있도록 한다.
- 단순히 이동할수 있는 a태그와 같은 Link로 갈 수 없다.
- useNavigate 를 활용 직접 -동적 파라미터 경로값을 설정
 */
