// components/NavBar.jsx
function NavBar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
          🦅 Aves de Chile
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCurrentPage('home')}>
                Inicio
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => setCurrentPage('admin')}>
                Admin
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">Ingresar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#signup">Crear cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;