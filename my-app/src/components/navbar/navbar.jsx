import Categorias from "./categorias/categorias";
import CartWidget from "../cartWidget/cartWidget";
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