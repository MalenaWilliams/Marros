import {useState} from 'react';

const ItemCount = ({stock}) => {
    
    const [contador, setContador] = useState(1)
    
    const agregarAlCarrito = () => {
        console.log((contador))
    }
    const sumar = () => contador < stock && setContador(contador+1)
    const restar = () => contador > 1 && setContador(contador-1)
    
    return (
        <>
            <button className="button" onClick={() => sumar() }>+</button>
            {contador}
            <button className="button" onClick={() => restar()}>-</button>
            <button className="card__button" onClick={() => agregarAlCarrito() }>Agregar al Carrito</button>
        </>
    );
}

export default ItemCount;

