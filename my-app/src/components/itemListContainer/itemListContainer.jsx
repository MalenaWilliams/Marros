import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { consultarBDD } from "../../assets/funciones.js"
import { cargarBDD } from "../../assets/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams()
    useEffect(() => {

        if (category) {
            consultarBDD('../json/products.json').then(product => {
                const productList = product.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProduct = ItemList({ productList })
                setProducts(cardProduct)
            })
        } else {
            consultarBDD('./json/products.json').then(product => {
                const productList = product.filter(prod => prod.stock > 0)
                const cardProduct = ItemList({ productList })
                setProducts(cardProduct)
            })
        }
        //cargarBDD().then(products => console.log(products))//
    }, [category]);

    return (
        <div className="card__container">
            {products}
        </div>
    );
}

export default ItemListContainer;
