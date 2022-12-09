import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
const ItemDetail = ({ item }) => {
    console.log(item)
    return (
        <div className="cardDetail">
            <img className="card__img" src={`../imagenes/${item.img}`} alt="" />
            <div className="cardDetail__body">
                <h5 className="cardDetail__title">{item.nombre}</h5>
                <p className="cardDetail__text">Medidas: {item.medidas} </p>
                <p className="cardDetail__text">Material: {item.material} </p>
                <p className="cardDetail__text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                <p className="cardDetail__text">Stock: {item.stock} </p>
                <ItemCount stock={item.stock} />
                <button className="card__button"><Link to={`/`}>Volver</Link></button>
            </div>
        </div>
    );
}

export default ItemDetail;
