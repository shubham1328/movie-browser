import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fetchMovieDetails } from '../utils/api';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
    };

    getMovieDetails();

    return () => {
      setMovie(null);
    };
  }, [movieId]);

  if (!movie) return <p className={{color:'black'}}>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>{movie.title} - Movie Browser</title>
        <meta name="description" content={`Details about ${movie.title}.`} />
        <meta property="og:title" content={movie.title} />
        <meta property="og:description" content={`Discover more about ${movie.title}.`} />
        <meta property="og:image" content={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </Helmet>
      <div className="movie-detail">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-detail-poster"
        />
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </>
  );
};

export default MovieDetail;
