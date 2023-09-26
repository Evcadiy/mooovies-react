import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 10;
  const totalPages = 100;

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Search onSearch={handleSearch} />
        <MovieList currentPage={currentPage} moviesPerPage={moviesPerPage} />
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
