import { useEffect, useState } from "react";
import Message from "./Message";
import MoviesList from "./MoviesList";
import Header from "./Header";

export const KEY = "fe02cac2";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedMovie(id) {
    setSelectedId(id);
  }

  function handleCloseSelectedMovie() {
    setSelectedId(null);
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies.");

          const data = await res.json();

          if (data.Response === "True") {
            setMovies(data.Search);
            setError("");
          } else if (data.Response === "False") {
            setMovies([]);
            setError("No movies found.");
          }
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseSelectedMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} />
      <Message movies={movies} error={error} isLoading={isLoading} />
      <MoviesList
        movies={movies}
        selectedId={selectedId}
        onSelectMovie={handleSelectedMovie}
        onCloseSelectedMovie={handleCloseSelectedMovie}
      />
    </div>
  );
}
