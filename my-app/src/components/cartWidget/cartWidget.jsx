import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
const CartWidget = () => {

    const { getItemQuantity } = useCartContext()

    return (
        <li className="cart">
            <Link to={`/cart`}><img className="cart__img" src="https://firebasestorage.googleapis.com/v0/b/marros-react-coderhouse2022.appspot.com/o/cart.png?alt=media&token=a4aa4c15-3359-4eb5-8c6c-b656d84da6c2" alt="" /></Link>
            {getItemQuantity() > 0 && <span className="cart__number">{getItemQuantity()}</span>}
        </li>

    );
}

export default CartWidget;
