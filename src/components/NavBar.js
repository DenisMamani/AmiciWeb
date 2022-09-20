import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar=()=>{
    return(
        <>
    <nav className="header navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" >AmiciWeb</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-body lista">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/category/1">Tecnologia</Link>
                </li>
                <li className="nav-item">
                <Link to="/category/2">Electrodomesticos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/category/3">Herramientas</Link>
                </li>
                </ul>
            </div>
          </div>
          <CartWidget/>
        </div>
      </nav>
      </>
    );
}
export default NavBar;