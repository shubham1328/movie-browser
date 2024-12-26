import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim() === '') {
        dispatch(fetchMovies('popular'));
      } else {
        dispatch(fetchMovies(query));
      }
  }, [dispatch, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchMovies(query));
    } else {
      dispatch(fetchMovies('popular'));
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 w-full max-w-lg rounded-md text-black"
      />
    </form>
  );
};

export default SearchBar;
