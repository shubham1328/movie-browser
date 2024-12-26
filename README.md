# Movie Browser

A React-based web application that allows users to browse movies, search for specific films, and save favorite movies. The app fetches movie data from a public API (e.g., TMDB or IMDb) and provides advanced filtering options for a smooth movie discovery experience.

## Features

- **Movie List**: Display a list of movies with title, poster, and release year.
- **Search Functionality**: Dynamically search movies by title, genre, and other filters.
- **Favorite Movies**: Save favorite movies to a local list.
- **Infinite Scrolling**: Continuously load movies as the user scrolls.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **SEO Friendly**: Optimized for search engines.
- **Accessibility**: Follows best practices for accessibility.

## Technologies Used

- **Frontend**:
  - React
  - React Router
  - Redux (For state management)
  - Axios (For API requests)
  - TailwindCSS (For styling)
  - React Icons (For iconography)

- **Backend**:
  - No backend (data fetched from a public API like TMDB or IMDb)

- **Build & Deployment**:
  - Vite (For fast builds and hot module replacement)
  - Netlify (For deployment)

## Installation

To run the project locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/movie-browser.git
   cd movie-browser
   npm install
   npm run dev

   
Usage
Search Movies
Type in the search bar to search for movies by title.
Use advanced filters to narrow down the search results by genre, rating, and release year.
Save Favorite Movies
Click the heart icon next to any movie to save it to your favorites list.
You can view the list of favorite movies from the Favorites page.

Infinite Scrolling
As you scroll down the page, more movies will be loaded automatically.

Deployment
This project is deployed on Netlify. To deploy on Netlify:

Build the project:
npm run build

Deploy to Netlify using the Netlify CLI:
netlify deploy --prod

API Used
The app fetches movie data from the TMDB API (or another API like IMDb). You will need to obtain an API key from TMDB (or the respective API provider) and set it in your .env file
REACT_APP_TMDB_API_KEY=<your-api-key>



Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

Acknowledgements
TMDB API
React
TailwindCSS
Netlify
Vite

