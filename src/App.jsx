import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/Navbar';
import './styles/globals.css';
import './index.css';
import MovieDetail from './pages/MovieDetails';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: '/favorites',
      element: (
        <>
          <Navbar />
          <FavoritesPage />
        </>
      ),
    },
    {
      path: '/movies/:movieId',
      element: <MovieDetail />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />{' '}
    </div>
  );
};

export default App;
