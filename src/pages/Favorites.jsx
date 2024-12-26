// src/pages/Favorites.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { getFavorites } from '../utils/favorites';

const Favorites = () => {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    return <p>No favorite movies found.</p>;
  }

  return (
    <div className="favorites-page">
      <h1>Your Favorite Movies</h1>
      <div className="movie-list">
        {favorites.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date.split('-')[0]}</p>
            <Link to={`/movies/${movie.id}`} className="movie-link">
              More Info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;