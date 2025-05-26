import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  background: var(--accent-color);
  color: var(--light-color);
  font-size: 1.8rem;
  margin: 20px 0 20px 14px;
  padding: 10px 14px;
  width: 190px;
  text-align: center;
  border-radius: 4px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const {
    nowPlayingMovie,
    topRatedMovie,
    upComingMovie,
    popularMovie,
    loading,
  } = useSelector((state) => state.movie);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    dispatch(movieAction.getMovies()); //마운트가 된다면 movieAction안에getMovies를 실행시킨다
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" cssOverride={override} size={150} />
      </Wrapper>
    );
  }

  return (
    <>
      {
        nowPlayingMovie.results && (
          <Banner movie={nowPlayingMovie.results[19]} />
        )
        //nowPlayingMovie.results 이게 참이면은 Banner에게 0번째 값을 주세요
        //조건부 랜더링 이나 and단락 회로 라고 부른다
      }
      <Title>NowPlaying Movie</Title>
      <MovieSlide movies={nowPlayingMovie} />
      <Title>TopRated Movie</Title>
      <MovieSlide movies={topRatedMovie} />
      <Title>Upcoming Movie</Title>
      <MovieSlide movies={upComingMovie} />
      <Title>Popular Movie</Title>
      <MovieSlide movies={popularMovie} />
    </>
  );
};

export default Home;
