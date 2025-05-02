import { path } from "framer-motion/client";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovieInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGetMovieResult {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovieInfo[];
  total_pages: number;
  total_results: number;
}

// 캐시를 이용하기 위해 변수설정
// 최신값을 유지하고 있다면 캐시에 넣어두고 그것을 활용
// 그래서 쿼리를 쓴다.
// 리액트쿼리 + 리코일 조합 하기 위해서

export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
};

export const searchContents = (keyword: string | null) => {
  return fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${keyword}&include_adult=false&language=ko-KR&page=1`
  ).then((response) => response.json());
};

export const searchGenres = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?api_key=${API_KEY}&language=ko`
  ).then((response) => response.json());
};

export const getReviews = (movieId: number | undefined) => {
  //영화 아이디 찾아오기
  return fetch(
    `${BASE_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  ).then((response) => response.json());
};

export const getVideos = (movieId: number | undefined) => {
  return fetch(`${BASE_PATH}/movie/${movieId}/videos?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};
