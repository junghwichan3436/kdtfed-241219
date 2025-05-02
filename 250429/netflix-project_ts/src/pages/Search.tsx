import { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Pagination from "react-js-pagination";
import YouTube from "react-youtube";
import {
  searchContents,
  IGetMovieResult,
  searchGenres,
  getReviews,
  getVideos,
} from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  padding: 60px 30px 0;
  color: ${({ theme }) => theme.white.darker};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
`;

const SearchBox = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const MovieSection = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

const MovieImg = styled.img`
  width: 50%;
  border: 3px solid #fff;
  border-radius: 3px;
  height: auto;
  object-fit: cover;
`;

const ReadyImg = styled.div`
  width: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const MovieTitle = styled.h4`
  font-size: 3rem;
  color: ${({ theme }) => theme.white.darker};
  background: ${({ theme }) => theme.red};
  padding: 10px;
  text-align: center;
  border-radius: 3px;
`;

const MovieOverView = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.white.lighter};
  border-bottom: 1px solid ${({ theme }) => theme.white.lighter};
`;

const MovieDate = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    background: var(--rate-color);
    padding: 10px;
    border-radius: 3px;
  }
`;

const MovieValue = styled.div`
  font-size: 1.4rem;
  padding: 10px;
  background: ${({ theme }) => theme.black.lighter};
  border-radius: 3px;
`;

const MovieRate = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    background: var(--rate-color);
    padding: 10px;
    border-radius: 3px;
  }
`;

const RateNumbers = styled.div`
  font-size: 1.4rem;
  span {
    display: block;
    background: var(--rate-color);
    padding: 10px;
    border-radius: 3px;
  }
`;

const MovieNumbers = styled.div``;

const ReviewSection = styled.div`
  background: ${({ theme }) => theme.white.lighter};
  color: ${({ theme }) => theme.black.darker};
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
`;

const ReviewTitle = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 1.6rem;
  line-height: 1.2;
`;

const GenreSection = styled.div`
  display: block;
  background: var(--rate-color);
  padding: 10px;
  border-radius: 8px;
  font-size: 1.4rem;
`;

const YouTubeContent = styled.div``;

const Tabs = styled.div``;

const Tab = styled.span``;

//pagenation 스타일 적용
const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  /* border: 1px solid #f00; */
  ul {
    display: flex;
    gap: 10px;
    li {
      a {
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        /* border: 1px solid #f00; */
        transition: background 0.3s;
        &:hover {
          background: ${({ theme }) => theme.red};
        }
      }
    }
  }
`;

// 인터페이스
interface Obj {
  id: number;
  name: string;
}

interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: string;
  };
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
}

interface ContentState {
  //T= 어떠한 형태가 올지모른다
  // interface ContentState<T>  //T= 어떠한 형태가 올지모른다
  [key: number]: string[]; // 가변값 타입변수
  // [key : number]: T[] // 가변값 타입변수
}

const Search = () => {
  const [videos, setVideos] = useState<ContentState>({});
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetMovieResult>({
      queryKey: ["searchContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: searchGenres,
  });

  const ids = movieData?.results.map((movie) => movie.id);
  //20개 영화에 대한아이디를 ids로 찾아왔다

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["reviews", ids],
    queryFn: () =>
      //queryFn 의 인자값을 가져올때는 항상 콜백의 형태를 띄고 있어야한다
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
  });
  //여러가지의 데이터 값을 찾아올 때 하나만 찾아왔을 때
  // Promise.all 데이터를 다 모았으면 한번에 출력해

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["videos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
  });

  useEffect(() => {
    // movieData영화데이터와 videoData추천영상 이마운트가 되면들어오고 언제 든지 업데이트가 되고
    if (movieData && videoData) {
      //값이 무조건 있어야하니까 사망조건 연산자 필요없음
      movieData.results.forEach((movie) => {
        //20개 영화 아이디를 getVideos 인자값으로 넣어서 forEach로 돌려서 id값을 찾아와서 추천영상을 가져올 수 있게 한다!!
        getVideos(movie.id).then((data) => {
          if (data.results) {
            //results안에있는 video의 key 값을 map함수를 돌려서 찾아오기
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev, //
              [movie.id]: videoIds, //영화의 아이디와 키 값만 뽑아낸 객체로 만들기
            }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4); // 페이지당 영화를 4개 넣고 싶다

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    //1페이지에서 시작하지만 setCurrentPage를 통해 내가 어떤 페이지로 갈 것인가를 결정한다
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  // 여기부분 모르겠다
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  return (
    <>
      <Container>
        {movieLoading && genreLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            {/* //pagenation 적용 */}
            {currentMovies?.map((movie, index) => (
              <SearchBox key={movie.id}>
                <MovieSection>
                  {movie.backdrop_path ? (
                    <MovieImg
                      src={makeImagePath(movie.backdrop_path)}
                      alt="img"
                    />
                  ) : (
                    <ReadyImg>Ready For Images...</ReadyImg>
                  )}
                  <MovieInfo>
                    <MovieTitle>{movie.original_title}</MovieTitle>
                    <MovieOverView>{movie.overview}</MovieOverView>
                    <MovieDate>
                      <span>Release : {movie.release_date}</span>
                    </MovieDate>
                    <MovieRate>
                      <span>Rate : {movie.vote_average.toFixed(2)}</span>
                    </MovieRate>
                    <RateNumbers>
                      <span>
                        Members : {movie.vote_count.toLocaleString("ko-kr")}
                      </span>
                    </RateNumbers>
                    <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                    <GenreSection>
                      {movie.genre_ids
                        .map(
                          (id) =>
                            genreData.genres.find((item: Obj) => item.id === id)
                              .name
                        )
                        .join(", ")}
                    </GenreSection>
                  </MovieInfo>
                </MovieSection>
                <ReviewSection>
                  <h3>😀Review</h3>
                  {reviewLoading ? (
                    <div>Loading Reviews...</div>
                  ) : (
                    // Array.isArray() 형변환을 해주는 함수
                    <ul>
                      {reviewData &&
                      reviewData[index].results &&
                      reviewData[index].results.length > 0 &&
                      Array.isArray(reviewData[index].results) ? (
                        reviewData[index].results.map(
                          (review: ReviewContents) => (
                            <li key={index}>
                              <div>{review.author}</div>
                              <ReviewTitle>{review.content}</ReviewTitle>
                            </li>
                          )
                        )
                      ) : (
                        <ReviewTitle>Not yet Reviews</ReviewTitle>
                      )}
                    </ul>
                  )}
                </ReviewSection>
                <YouTubeContent>
                  {videos[movie.id]?.length > 0 ? (
                    <YouTube
                      videoId={videos[movie.id][0]}
                      opts={{
                        width: "100%",
                        height: "600px",
                        playerVars: {
                          autoplay: 0, //자동재생 여부 판단
                          loop: 0, //반복무한재생 여부 판단
                          modestbranding: 1, //컨트롤바에 유튜브로고 표시 여부 판단
                          playlist: videos[movie.id][0], //반목부한재생하고자 하는 플레이리스트
                        },
                      }}
                    /> // video id값 부여
                  ) : (
                    <div>No Avaliable</div>
                  )}
                </YouTubeContent>
                {/* 비디오 데이터 안에 있는 매칭값을 찾아온다!! */}
              </SearchBox>
            ))}
            <StyledPagination>
              <Pagination
                onChange={handlePageChange}
                activePage={currentPage}
                itemsCountPerPage={moviesPerPage}
                totalItemsCount={movieData?.results.length || 0}
                pageRangeDisplayed={4} //몇페이지로 쪼갤건지 페이지를 바꿔주는 컴포넌트
              />
            </StyledPagination>
          </>
        )}
        <Outlet />
      </Container>
    </>
  );
};

export default Search;

// 로그인로그아웃
// tv Show
// upcomming이나 기타요소 끌어오기
