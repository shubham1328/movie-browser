export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

export const saveFavorite = (movie) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.some((fav) => fav.id === movie.id)) {
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

export const removeFavorite = (movieId) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

export const isFavorite = (movieId) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.some((movie) => movie.id === movieId);
};
