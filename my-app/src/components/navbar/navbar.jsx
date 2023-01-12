import ButtonDarkMode from "./ButtonDarkMode/ButtonDarkMode";
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/marros-react-coderhouse2022.appspot.com/o/logoMarros.png?alt=media&token=548b4379-3522-4cd4-8dae-bab7100f2aeb" alt="logo" />
      <ul className="navbar__container">
        <Categorias />
        <CartWidget />
        <ButtonDarkMode />
      </ul>
    </nav>
  );
};
export default Navbar;