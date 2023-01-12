import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCartContext } from "../../context/CartContext";
const ItemDetail = ({ item }) => {

    const { darkMode } = useDarkModeContext()
    const { addItem } = useCartContext()

    const onAdd = (contador) => {
        addItem(item, contador)
    }

    return (
        <div className={`${darkMode ? 'cardDetail' : 'cardDetailDarkMode'}`}>
            <img className="card__img" src={item.img} alt="" />
            <div className="cardDetail__body">
                <h5 className="cardDetail__title">{item.nombre}</h5>
                <p className="cardDetail__text">Medidas: {item.medidas} </p>
                <p className="cardDetail__text">Material: {item.material} </p>
                <p className="cardDetail__text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                <p className="cardDetail__text">Stock: {item.stock} </p>
                <ItemCount inicial={1} stock={item.stock} onAdd={onAdd} />
                <button className="card__button"><Link to={`/`}>Volver</Link></button>
            </div>
        </div>
    );
}

export default ItemDetail;
