// const getMovies = () => {
//   //return문으로 반환해야지 middleware를 거친다고 판단한다
//   return async (dispatch) => {
//     //dispatch를 인자값으로 주어야
//     const url =
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=5b2c209fbf6e325b933edc48dff486ff&language=ko-KR&page=1";
//     const response = await fetch(url);
//     const data = await response.json();
//     dispatch({ type: "nowPlaying", payload: data });
//   };
// };

// export const movies = { getMovies };

import api from "../api";
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        loading: true, //로딩이 요청중이라면 로딩
      });
      //api_key를 쓰기 위해서는 환경변수를 밖에 만들어준다
      //.env가 바로 나의 api주소이다
      //현재상영작
      const nowPlayingMovieApi = api.get(
        `movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      //명작
      const topRatedMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      //개봉예정작
      const upCommingMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      const genresMovieApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );
      //인기상영작
      const popularMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      console.log(popularMovieApi);

      const [
        nowPlayingMovie,
        topRatedMovie,
        upComingMovie,
        popularMovie,
        genresMovie,
      ] = await Promise.all([
        //Promise.all 다 들어오면 실행해라
        nowPlayingMovieApi,
        topRatedMovieApi,
        upCommingMovieApi,
        popularMovieApi,
        genresMovieApi, //genresMovieApi 데이터는 genresMovie안에 들어간다
      ]);
      //리듀서로 보내기 위해
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          nowPlayingMovie: nowPlayingMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          popularMovie: popularMovie.data,
          genresMovie: genresMovie.data.genres,
          loading: false,
        },
        loading: false, //영화가 다들어 오면 로딩 중지
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAIL",
        loading: false, //ㅇ영화가 들어오지못하면 로딩중지
      });
    }
  };
};

export const movieAction = { getMovies };
