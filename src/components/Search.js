import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      inputEl.current.focus();
      setQuery("");
    },
    [setQuery]
  );

  return (
    <div className="header--search">
      <input
        type="text"
        placeholder="Search Movie ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </div>
  );
}
