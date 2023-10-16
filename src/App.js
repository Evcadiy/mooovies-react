import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import GenreButtons from "./components/GenreButton";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [genresData, setGenresData] = useState({});
  const [url, setUrl] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`;
  const moviesPerPage = 10;
  const totalPages = 100;

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const updateGenres = (genreData) => {
    setGenresData(genreData);
  };

  const pageBack = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (searchTerm) {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?${apiKey}&query=${searchTerm}&page=${currentPage}`;
      setUrl(searchUrl);
    } else {
      const discoverUrl = `https://api.themoviedb.org/3/discover/movie?${apiKey}&page=${currentPage}`;
      setUrl(discoverUrl);
    }
  }, [searchTerm, currentPage]);

  return (
    <div className="App">
      <header className="App-header">
        <Title onPageBack={pageBack} />
        <Search onSearch={handleSearch} />
        <GenreButtons genresData={genresData} API_URL={url} />
        <MovieList
          currentPage={currentPage}
          moviesPerPage={moviesPerPage}
          API_URL={url}
          GENRE_API={GENRE_API}
          updateGenres={updateGenres}
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
