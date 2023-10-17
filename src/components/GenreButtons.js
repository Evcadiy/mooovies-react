import React from "react";
import "./GenreButtons.css";

const GenreButtons = ({ genresData, setSelectedGenre }) => {
  const genreNames = Object.values(genresData);

  const addGenre = (e) => {
    const selectedGenreName = e.target.textContent;
    const selectedGenreId = Object.keys(genresData).find(
      (id) => genresData[id] === selectedGenreName
    );
    setSelectedGenre(selectedGenreId);
  };

  return (
    <ul className="genre-buttons">
      {genreNames.map((genreName, index) => (
        <li onClick={addGenre} key={index} className="genre-button">
          {genreName}
        </li>
      ))}
    </ul>
  );
};

export default GenreButtons;
