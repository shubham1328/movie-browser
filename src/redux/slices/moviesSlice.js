import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  nowPlayingMovies: null,
    trailerVideo: null,
        popularMovies: null,
        topratedMovies: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    nowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setLoading, setError, nowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;