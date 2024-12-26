import { APPEND_MOVIES, SET_ERROR, SET_LOADING, SET_MOVIES } from "../types/movieTypes";

export const fetchMovies = (query, page = 1, append = false) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}&page=${page}`
    );
    const data = await response.json();
    if (append) {
      dispatch({ type: APPEND_MOVIES, payload: data.results });
    } else {
      dispatch({ type: SET_MOVIES, payload: data.results });
    }
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
