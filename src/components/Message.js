export default function Message({ movies, error, isLoading }) {
  return (
    <div className="message--container">
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>❗{error}</p>}
      {!isLoading && !error && movies.length === 0 && (
        <p>🔍 Start searching your favorite movies.</p>
      )}
      {!isLoading && !error && movies.length > 0 && (
        <p>
          🎞️ Found <strong>{movies.length}</strong> results.
        </p>
      )}
    </div>
  );
}
