import Item from "../Item/Item";
const ItemList = ({ productList }) => {
    console.log(productList)
    return (
        <>
            {productList.map(product => <Item key={product.id} cardProduct={product} />)}
        </>
    );
}

export default ItemList;
