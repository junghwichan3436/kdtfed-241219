let initialState = {
  nowPlayingMovie: {},
  topRatedMovie: {},
  upComingMovie: {},
  popularMovie: {},
  genresMovie: [],
  loading: true,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        nowPlayingMovie: payload.nowPlayingMovie,
        topRatedMovie: payload.topRatedMovie,
        upComingMovie: payload.upComingMovie,
        popularMovie: payload.popularMovie,
        genresMovie: payload.genresMovie,
        loading: false,
      };
    case "GET_MOVIES_FAIL":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default movieReducer;
