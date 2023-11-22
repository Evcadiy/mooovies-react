import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./MovieList.css";
import BasicModal from "./BasicModal";

const MovieList = ({ currentPage, API_URL, GENRE_API, updateGenres }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  // const getMovies = (url) => {
  //   axios.get(url).then((response) => setMovies(response.data.results));
  // };

  // const getGenres = (url) => {
  //   axios.get(url).then((response) => {
  //     const genreData = {};
  //     response.data.genres.forEach((genre) => {
  //       genreData[genre.id] = genre.name;
  //     });
  //     setGenres(genreData);
  //     updateGenres(genreData);
  //   });
  // };

  const getMovies = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setMovies(data.results))
      .catch((error) => {
        // Обработка ошибок запроса
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const getGenres = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const genreData = {};
        data.genres.forEach((genre) => {
          genreData[genre.id] = genre.name;
        });
        setGenres(genreData);
        updateGenres(genreData);
      })
      .catch((error) => {
        // Обработка ошибок запроса
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map((genreId) => genres[genreId]);
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const getClassByVote = (vote) => {
    if (vote >= 7) return "green";
    else if (vote > 5) return "orange";
    else return "red";
  };

  useEffect(() => {
    getMovies(API_URL);
    getGenres(GENRE_API);
  }, [currentPage, API_URL, GENRE_API]);

  return (
    <ul className="movie-list">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <li key={movie.id} className="movie">
            <img
              src={
                movie.poster_path === null
                  ? "https://cinemaone.net/images/movie_placeholder.png"
                  : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }
              alt={movie.title}
            />
            <div className={getClassByVote(movie.vote_average)}>
              {movie.vote_average.toFixed(1)}
            </div>
            <p className="movie-title">{movie.title}</p>
            <p className="genre">
              {getGenreNames(movie.genre_ids).join(", ") +
                ` | ` +
                movie.release_date.slice(0, 4)}
            </p>
            <button onClick={() => openModal(movie)}>More Information</button>
            {console.log(movie)}
          </li>
        ))
      ) : (
        <p>No movies found.</p>
      )}
      {selectedMovie && (
        <BasicModal
          getGenreNames={getGenreNames}
          selectedMovie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </ul>
  );
};

export default MovieList;
