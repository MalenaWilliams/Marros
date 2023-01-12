import { useContext, useState, createContext } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
    const [cart, setCarrito] = useState([]);

    const isInCart = (id) => {

        return cart.find(product => product.id === id)
    }
    const addItem = (product, cantidad) => {
        if (isInCart(product.id)) {
            const indice = cart.findIndex(prod => prod.id === product.id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else {
            const newProduct = {
                ...product,
                cant: cantidad
            }
            setCarrito([...cart, newProduct])
        }
    }

    const emptyCart = () => {
        setCarrito([])
    }

    const removeItem = (id) => {
        setCarrito(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )

}

