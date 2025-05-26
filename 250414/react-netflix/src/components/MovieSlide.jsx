import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  color: var(--light-color);
  padding: 0 14px;
  border: 1px solid #f00;
`;

const MovieSlide = ({ movies }) => {
  console.log(movies);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 400 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <Carousel responsive={responsive}>
        {movies.results.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MovieSlide;
