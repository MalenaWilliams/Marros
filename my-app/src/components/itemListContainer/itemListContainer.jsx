import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../assets/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams()
    useEffect(() => {

        if (category) {
            getProducts().then(product => {
                const productList = product.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                const cardProduct = ItemList({ productList })
                setProducts(cardProduct)
            })
        } else {
            getProducts().then(product => {
                const productList = product.filter(prod => prod.stock > 0)
                const cardProduct = ItemList({ productList })
                setProducts(cardProduct)
            })
        }
        //cargarBDD().then(products => console.log(products))//
        /*getProduct("0dVlsUynjmramC6Dl5Gn").then(prod => {
            prod.stock -= 5
            delete prod.id
            updateProduct("0dVlsUynjmramC6Dl5Gn", prod).then(estado => console.log(estado))
        })*/

    }, [category]);

    return (
        <div className="card__container">
            {products}
        </div>
    );
}

export default ItemListContainer;
