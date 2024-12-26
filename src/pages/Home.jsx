import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
import MovieList from '../components/MovieList';

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state)
  const [query, setQuery] = useState('popular');
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMovies(query, 1));
    setPage(1);
  }, [dispatch, query]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;

      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (scrollHeight - scrollTop <= clientHeight + 100) {
        const nextPage = page + 1;
        dispatch(fetchMovies(query, nextPage, true));
        setPage(nextPage);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, page, query, dispatch]);

  return (
    <div className="bg-gray-900 text-white">
      {loading && <p className="text-black-600">Loading...</p>}
      {error && <p className="text-red-600 bg-red-200">{error}</p>}
      <div className="flex overflow-x-scroll">
        <div className="flex">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Home;
