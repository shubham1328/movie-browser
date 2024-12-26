import React from 'react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ movies, title }) => {
  return (
    <div className="my-8">
      <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;
