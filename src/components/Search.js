export default function Search({ query, setQuery }) {
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
