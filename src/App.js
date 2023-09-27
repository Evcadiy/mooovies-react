import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=0c0a0e274ff95e20e242e38930e2ca95&page=${currentPage}`
  );

  const moviesPerPage = 10;
  const totalPages = 100;

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1); // Сбрасываем страницу при поиске
  };

  useEffect(() => {
    if (searchTerm) {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=0c0a0e274ff95e20e242e38930e2ca95&query=${searchTerm}&page=${currentPage}`;
      setUrl(searchUrl);
    } else {
      const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=0c0a0e274ff95e20e242e38930e2ca95&page=${currentPage}`;
      setUrl(discoverUrl);
    }
  }, [searchTerm, currentPage]);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Search onSearch={handleSearch} />
        <MovieList
          currentPage={currentPage}
          moviesPerPage={moviesPerPage}
          API_URL={url}
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
