import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
    return ( 
      <nav className="navbar">
        <img className="logo" src="./imagenes/logoMarros.png" alt="logo" />
        <ul className="navbar__container">
        <Categorias/>
        <CartWidget/>
        </ul>
      </nav>
    );
  };
  export default Navbar;