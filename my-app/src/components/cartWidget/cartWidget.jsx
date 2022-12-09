import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <li className="cart">
            <Link to={`/cart`}><img className="cart__img" src="/imagenes/cart.png" alt="" /></Link>
            <p className="cart__number">0</p>
        </li>
    );
}

export default CartWidget;
