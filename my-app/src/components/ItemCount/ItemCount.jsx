import { useState } from 'react';

const ItemCount = ({ inicial, stock, onAdd }) => {

    const [contador, setContador] = useState(inicial)

    const agregarAlCarrito = () => onAdd(contador)
    const sumar = () => contador < stock && setContador((prev) => prev + 1)
    const restar = () => contador > 1 && setContador((prev) => prev - 1)

    return (
        <>
            <button className="button" onClick={() => sumar()}>+</button>
            <span>{contador}</span>
            <button className="button" onClick={() => restar()}>-</button>
            <button className="card__button" onClick={() => agregarAlCarrito()}>Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;

