import axios from 'axios';


const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_URL = 'https://api.themoviedb.org/3/movie';

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw new Error('Failed to fetch movie details');
  }
};