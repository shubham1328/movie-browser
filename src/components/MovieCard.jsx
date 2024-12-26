import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { saveFavorite, removeFavorite, isFavorite } from '../utils/favorites';

const MovieCard = ({ movie }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.id));
  }, [movie.id]);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      saveFavorite(movie);
    }
    setFavorite(!favorite);
  };

  return (
    <div className="movie-information">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
        alt={movie?.title}
        className="movie-poster"
        loading="lazy"
      />

      <div className="movie-details">
        <h3 className="movie-title text-white font-semibold text-sm">
          {movie?.title}
        </h3>
        <p className="movie-release-year">{movie?.release_date?.slice(0, 4)}</p>
        <div className="action-buttons flex justify-between items-baseline">
          <Link to={`/movies/${movie.id}`} className="more-info text-blue-500">
            More Info
          </Link>
          <button
            onClick={handleFavoriteClick}
            aria-label={
              isFavorite(movie.id)
                ? 'Remove from favorites'
                : 'Add to favorites'
            }
            className={`favorite-btn block text-xl ${
              isFavorite(movie.id) ? 'text-yellow-400' : 'text-gray-400'
            }`}
          >
            {isFavorite(movie.id) ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
