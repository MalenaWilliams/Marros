import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD("../json/products.json").then(products => {
            const prod = products.find(product => product.id === parseInt(id))
            setProduct(prod)
        })
        
    }, []);

    return (
        <div className="cardDetail__container">
            <ItemDetail item={product} />
        </div>
    );
}

export default ItemDetailContainer;