import "./GenreButtons.css";

const GenreButtons = ({ genresData, API_URL }) => {
  console.log(genresData);

  const genreNames = Object.values(genresData);

  const addGenre = (e) => {
    const selectedGenre = e.target.textContent;
    console.log(selectedGenre);
    console.log(API_URL);
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
