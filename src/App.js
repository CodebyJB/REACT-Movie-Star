import { useEffect, useState } from "react";

const KEY = "fe02cac2";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(
    function () {
      try {
        async function fetchMovies() {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          const data = await res.json();
          console.log(data);
          setMovies(data.Search);
        }
        fetchMovies();
      } catch (err) {
        console.log(err.message);
      }
    },
    [query]
  );

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} />
      <Message movies={movies} />
      <MoviesList movies={movies} />
    </div>
  );
}

function Header({ query, setQuery }) {
  return (
    <div className="header--container">
      <Logo />
      <Search query={query} setQuery={setQuery} />
    </div>
  );
}

function Logo() {
  return (
    <figure className="header--logo">
      <img src="../img/Logo.png" alt="Logo" />
    </figure>
  );
}
function Search({ query, setQuery }) {
  return (
    <div className="header--search">
      <input
        type="text"
        placeholder="Search Movie ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function Message({ movies }) {
  return (
    <div className="message--container">
      {movies ? <NumResults movies={movies} /> : ""}
    </div>
  );
}

function NumResults({ movies }) {
  return (
    <div>
      <p>
        Found <strong>{movies.length}</strong> results.
      </p>
    </div>
  );
}

function MoviesList({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState("");

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
    console.log(movie);
  }

  return (
    <div>
      <div className="movie--container">
        <ul className="movie--list">
          {movies?.map((movieObj) => (
            <Movie
              key={movieObj.imdbID}
              movieObj={movieObj}
              onSelect={() => handleMovieSelect(movieObj)}
            />
          ))}
        </ul>
        <MovieSelected selectedMovie={selectedMovie} />
      </div>
    </div>
  );
}

function Movie({ movieObj, onSelect }) {
  return (
    <div>
      <li key={movieObj.imdbID} className="movie--item" onClick={onSelect}>
        <img src={movieObj.Poster} alt={movieObj.Title} />
        <div className="movie--item--info">
          <h2>{movieObj.Title}</h2>
          <p>{movieObj.Year}</p>
        </div>
      </li>
    </div>
  );
}

function MovieSelected({ selectedMovie }) {
  return (
    <div className="movie--selected">
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <h2>{selectedMovie.Title}</h2>
      <p>{selectedMovie.Year}</p>
      <p>{selectedMovie.Type}</p>
    </div>
  );
}
