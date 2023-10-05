import "./GenreButtons.css";

const GenreButtons = ({ genresData }) => {
  console.log(genresData);

  const genreNames = Object.values(genresData);

  return (
    <ul className="genre-buttons">
      {genreNames.map((genreName, index) => (
        <li key={index} className="genre-button">
          {genreName}
        </li>
      ))}
    </ul>
  );
};

export default GenreButtons;
