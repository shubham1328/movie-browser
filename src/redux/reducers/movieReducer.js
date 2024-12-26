import { SET_MOVIES, SET_LOADING, SET_ERROR, APPEND_MOVIES } from '../types/movieTypes';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case APPEND_MOVIES:
        return { ...state, movies: [...state.movies, ...action.payload], error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
