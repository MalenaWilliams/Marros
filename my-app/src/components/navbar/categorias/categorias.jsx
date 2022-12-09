import { Link } from "react-router-dom";
const Categorias = () => {
  return (
    <>
      <li className="navbar__item">
        <button className="navbar__buttons"><Link className="navbar__link" to={`/`}>Home</Link></button>
      </li>
      <li className="navbar__item">
        <button className="navbar__buttons"><Link className="navbar__link" to={`/category/1`}>Living</Link></button>
      </li>
      <li className="navbar__item">
        <button className="navbar__buttons"><Link className="navbar__link" to={`/category/2`}>Dormitorio</Link></button>
      </li>
      <li className="navbar__item">
        <button className="navbar__buttons"><Link className="navbar__link" to={`/category/3`}>Cocina</Link></button>
      </li>
    </>
  );
}

export default Categorias;