import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import GenreButtons from "./components/GenreButtons";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [genresData, setGenresData] = useState({});
  const [url, setUrl] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const apiKey = "8f801807dab7518b9295fa3d960d508e";
  const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
  const moviesPerPage = 10;
  const totalPages = 100;

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
    setSelectedGenre("");
  };

  const handleGenreSelect = (selectedGenreId) => {
    setSelectedGenre(selectedGenreId);
    setCurrentPage(1);
  };

  const pageBack = () => {
    window.location.reload();
  };

  useEffect(() => {
    let updatedUrl = "";
    if (searchTerm) {
      updatedUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${currentPage}`;
    } else if (selectedGenre) {
      updatedUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}&with_genres=${selectedGenre}`;
    } else {
      updatedUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}`;
    }
    setUrl(updatedUrl);
  }, [apiKey, searchTerm, currentPage, selectedGenre]);

  return (
    <div className="App">
      <header className="App-header">
        <Title onPageBack={pageBack} />
        <Search onSearch={handleSearch} />
        <GenreButtons
          genresData={genresData}
          setSelectedGenre={handleGenreSelect}
        />
        <MovieList
          currentPage={currentPage}
          moviesPerPage={moviesPerPage}
          API_URL={url}
          GENRE_API={GENRE_API}
          updateGenres={setGenresData}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </header>
    </div>
  );
}

export default App;
