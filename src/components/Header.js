import Search from "./Search";
import Logo from "./Logo";

export default function Header({ query, setQuery }) {
  return (
    <div className="header--container">
      <Logo />
      <Search query={query} setQuery={setQuery} />
    </div>
  );
}
