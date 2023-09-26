import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css"; // Импортируйте стили

const MovieList = ({ currentPage, moviesPerPage }) => {
  const [movies, setMovies] = useState([]);

  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=0c0a0e274ff95e20e242e38930e2ca95&page=${currentPage}`;

  const getMovies = (url) => {
    axios.get(url).then((data) => setMovies(data.data.results));
  };

  useEffect(() => {
    getMovies(API_URL);
  }, [currentPage]);

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="movie-title">{movie.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
