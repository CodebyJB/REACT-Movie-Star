import { useEffect, useState } from "react";
import { KEY } from "./App";

export default function MovieSelected({ selectedId, onCloseSelectedMovie }) {
  const [movieDetail, setMovieDetail] = useState({});

  const {
    Title,
    Poster,
    Plot,
    Released,
    Runtime,
    Actors,
    Genre,
    Director,
    imdbRating,
  } = movieDetail || {};

  useEffect(
    function () {
      async function getMovieData() {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovieDetail(data);
        console.log(data);
      }
      getMovieData();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!Title) return;
      document.title = `🎞️ ${Title}`;

      return function () {
        document.title = "🎞️ Movie Star 🎬";
      };
    },
    [Title]
  );

  return (
    <div className="movie--selected">
      {selectedId ? (
        <>
          <button
            className="movie--selected-close"
            onClick={onCloseSelectedMovie}
          >
            ❌
          </button>
          <img src={Poster} alt={`Poster of ${Title}`} />
          <h2>{Title}</h2>
          <p>📅 Released on {Released}</p>
          <p>
            🕒{Runtime} ⭐ {imdbRating}
          </p>
          <p>📁 {Genre}</p>
          <p>🎞️ {Plot}</p>
          <p>💃🕺 Starring {Actors}</p>
          <p>🎬 Directed by {Director}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
