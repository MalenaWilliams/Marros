import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const { darkMode } = useDarkModeContext()
    const { cart, emptyCart, totalPrice, removeItem } = useCartContext()

    return (
        <>
            {cart.length === 0 ?
                <>
                    <h1>Su carrito esta vacio</h1>
                    <button className="btn btn-dark"><Link to={'/'}>Continuar Comprando</Link></button>
                </>
                :
                <div className="container">
                    <div className="cardCart__container" >
                        {cart.map(product =>

                            <div className="cardCart" key={product.id}>


                                <img src={product.img} alt="Producto" className="cardCart__img" />

                                <div>
                                    <h3 className="card-title">{product.nombre}</h3>
                                    <p className="card-text">Cantidad: {product.cant}</p>
                                    <p className="card-text">Precio unitario: $ {new Intl.NumberFormat('de-DE').format(product.precio)}</p>
                                    <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(product.precio * product.cant)}</p>
                                    <button className="removeButton" onClick={() => removeItem(product.id)}>Eliminar Producto</button>
                                </div>

                            </div>

                        )}
                    </div>
                    <div >
                        <p>Resumen de la compra: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                        <div>
                            <button className="removeButton" onClick={emptyCart}>Vaciar Carrito</button>
                            <button className="btn btn-dark"><Link to={'/'}>Continuar Comprando</Link></button>
                            <button className="btn btn-dark"><Link to={'/checkout'}>Finalizar Compra</Link></button>
                        </div>
                    </div>

                </div>


            }
        </>

    );
}

export default Cart;
