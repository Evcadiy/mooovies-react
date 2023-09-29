import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";
import BasicModal from "./BasicModal";

const MovieList = ({ currentPage, moviesPerPage, API_URL }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovies = (url) => {
    axios.get(url).then((response) => setMovies(response.data.results));
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
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
            <button onClick={() => openModal(movie)}>More Information</button>
          </li>
        ))
      ) : (
        <p>No movies found.</p>
      )}

      {selectedMovie && (
        <BasicModal
          selectedMovie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </ul>
  );
};

export default MovieList;
