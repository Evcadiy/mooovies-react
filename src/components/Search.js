import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=0c0a0e274ff95e20e242e38930e2ca95&query=${searchTerm}`;
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
