import { Link } from "react-router-dom";
const Item = ({cardProduct}) => {
    return (
        <div className="card" >
            <img className="card__img" src={`../imagenes/${cardProduct.img}`} alt="..." />
            <h5 className="card__title">{cardProduct.nombre}</h5>
            <p className="card__text">$ {new Intl.NumberFormat('de-DE').format(cardProduct.precio)}</p>
            <button className="card__button"><Link to={`/product/${cardProduct.id}`}>Ver producto</Link></button>
        </div>
    );
}

export default Item;
