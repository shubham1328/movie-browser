import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
       {movies?.map((movie) => (
        <div key={movie.id} className="movie-item">
        <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
