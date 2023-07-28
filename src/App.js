export default function App() {
  return (
    <div className="app">
      <Header />
      <MoviesList />
    </div>
  );
}

function Header() {
  return (
    <div className="header--container">
      <Logo />
      <Search />
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
function Search() {
  return (
    <div className="header--search">
      <input type="text" placeholder="Search Movie" />
    </div>
  );
}

function MoviesList() {
  return (
    <div>
      <Movie />
    </div>
  );

  function Movie() {}
}
