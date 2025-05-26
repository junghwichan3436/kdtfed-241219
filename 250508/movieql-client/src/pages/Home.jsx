import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  height: 45vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 600;
`;

const Loading = styled.div`
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
`;

const MoviesGrid = styled.div`
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: -50px;
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const PosterBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background}) center/cover no-repeat;
`;

// 쿼리의 무언가의 값을 가져오겠단 얘기이다. (gql사용방식)
// 현재 컴포넌트 외부에서 데이터를 끌어오고자 하는 방법
const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery(ALL_MOVIES);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Header>
            <Title>Movies List</Title>
          </Header>
          <MoviesGrid>
            {data.allMovies.map((movie) => (
              <PosterContainer key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <PosterBg background={movie.medium_cover_image}>
                    {movie.title}
                  </PosterBg>
                </Link>
              </PosterContainer>
            ))}
          </MoviesGrid>
        </Container>
      )}
    </>
  );
};

export default Home;
