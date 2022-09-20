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
                <Link className="category" to="/category/1">Tecnologia</Link>
                <Link className="category" to="/category/2">Electrodomesticos</Link>
                <Link className="category" to="/category/3">Herramientas</Link>
            </div>
          </div>
          <CartWidget/>
        </div>
      </nav>
      </>
    );
}
export default NavBar;