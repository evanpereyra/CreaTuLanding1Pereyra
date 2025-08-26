import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>🛍️ MiTienda</h1>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">🏠 Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/catalogo" className="nav-link">📦 Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link to="/productos" className="nav-link">🛍️ Todos los Productos</Link>
          </li>
        </ul>
        
        <div className="nav-cart">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
