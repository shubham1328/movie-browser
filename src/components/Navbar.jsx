import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const location = useLocation();
  const isFavoritesPage = location.pathname.includes('favorites');


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          Movie Browser
        </Link>
        <div className="navbar-links">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/favorites">
                Favorites
              </Link>
            </li>
          </ul>
          {!isFavoritesPage &&
          <div className='search-bar'>
          <SearchBar />
          </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
