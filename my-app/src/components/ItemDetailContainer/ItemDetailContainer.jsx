import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../assets/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        getProduct(id).then(prod => {
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