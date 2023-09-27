import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";

const MovieList = ({ currentPage, moviesPerPage, API_URL }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = (url) => {
    axios.get(url).then((response) => setMovies(response.data.results));
  };

  useEffect(() => {
    getMovies(API_URL);
  }, [currentPage, API_URL]);

  return (
    <ul className="movie-list">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <li key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="movie-title">{movie.title}</p>
          </li>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </ul>
  );
};

export default MovieList;
