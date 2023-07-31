import  MovieSelected  from "./MovieSelected";

export default function MoviesList({
  movies,
  selectedId,
  onSelectMovie,
  onCloseSelectedMovie,
}) {
  return (
    <div>
      <div className="movie--container">
        <ul className="movie--list">
          {movies?.map((movieObj) => (
            <Movie
              key={movieObj.imdbID}
              movieObj={movieObj}
              onSelectMovie={onSelectMovie}
            />
          ))}
        </ul>
        <MovieSelected
          selectedId={selectedId}
          onCloseSelectedMovie={onCloseSelectedMovie}
        />
      </div>
    </div>
  );
}
function Movie({ movieObj, onSelectMovie }) {
  return (
    <div>
      <li
        className="movie--item"
        onClick={() => onSelectMovie(movieObj.imdbID)}
      >
        <img src={movieObj.Poster} alt={movieObj.Title} />
        <div className="movie--item--info">
          <h2>{movieObj.Title}</h2>
          <p>{movieObj.Year}</p>
        </div>
      </li>
    </div>
  );
}
