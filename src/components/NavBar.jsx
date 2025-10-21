{/*function receives 2 props from App.jsx:
  currentPAge: tells which page is currently active, home/detail/admin
  setCurrentPage: function from useState in App that changes the current state*/}


function NavBar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar navbar-expand-lg bg-black text-uppercase fixed-top" id="mainNav"> {/*from freelancer template*/}
      <div className="container">
        <a 
          className="navbar-brand" 
          onClick={() => setCurrentPage('home')}
          style={{ cursor: 'pointer' }} 
        >
        <img 
            src="/bird-logo.png" 
            alt="Aves de Chile logo"
            style={{ height: '40px', width: 'auto' }}
          /> Aves de Chile
        </a>

        {/*NavBar toggler button for mobile, when clicked on small screens, it shows/hides the menu items*/}{/*from freelancer template*/}
        <button 
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarResponsive" 
          aria-controls="navbarResponsive" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>

        {/* Navigation links section*/}
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">

            {/*Home link*/}
            <li className="nav-item mx-0 mx-lg-1">
              <a 
                className="nav-link py-3 px-0 px-lg-3 rounded" 
                onClick={() => setCurrentPage('home')}
                style={{ cursor: 'pointer' }}
              >
                Inicio
              </a>

              {/*Admin link*/}
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a 
                className="nav-link py-3 px-0 px-lg-3 rounded" 
                onClick={() => setCurrentPage('admin')}
                style={{ cursor: 'pointer' }}
              >
                Admin
              </a>

              {/*Ingresar link*/}
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#login">
                Ingresar
              </a>

              {/*Crear Cuenta*/}
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#signup">
                Crear cuenta
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;