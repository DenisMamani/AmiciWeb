import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div>
    <header className="header">
    <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">AmiciWeb</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <div className="logoBlanco">logo</div>
              <button type="button" className="btn-close text-reset bg-secondary" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body lista">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav" href="index.html">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav" href="">Contacto</a>
                </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      </div>
  );
}

export default App;
