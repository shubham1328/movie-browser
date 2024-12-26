import React from 'react';
import { Link } from 'react-router-dom';
import { getFavorites } from '../utils/favorites.js';

const FavoritesPage = () => {
  const favorites = getFavorites();
  if (favorites.length === 0) {
    return <p>No favorite movies found.</p>;
  }

  return (
    <div className="favorites-page">
      <h1>Your Favorite Movies</h1>
      <div className="movie-list">
        {favorites.map(movie => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title text-white font-semibold text-sm">{movie.title}</h3>
            <p className="movie-release-year">{movie.release_date.split('-')[0]}</p>
            <Link to={`/movies/${movie.id}`} className="more-info text-blue-500">
              More Info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
