import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "marros-react-coderhouse2022.firebaseapp.com",
    projectId: "marros-react-coderhouse2022",
    storageBucket: "marros-react-coderhouse2022.appspot.com",
    messagingSenderId: "128073861023",
    appId: "1:128073861023:web:213584dfff81740ac4dfaa"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/products.json')
    const products = await promise.json()
    products.forEach(async (prod) => {
        await addDoc(collection(database, "products"), { //collection si existe consulta si no existe crea
            nombre: prod.nombre,
            material: prod.material,
            medidas: prod.medidas,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

const getProducts = async () => {
    const products = await getDocs(collection(database, "products"))
    const items = products.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

const getProduct = async (id) => {
    const product = await getDoc(doc(database, "products", id))
    const item = { ...product.data(), id: product.id }
    return item
}

const updateProduct = async (id, info) => {
    const estado = await updateDoc(doc(database, "products", id), info)
    return estado
}

const deleteProduct = async (id) => {
    const estado = await deleteDoc(doc(database, "products", id))
    return estado
}

const createOrdenCompra = async (cliente, preTotal, fecha) => {
    const ordenCompra = await addDoc(collection(database, "ordenCompra"), {
        nombreCompleto: cliente.nombreCompleto,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}

const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(database, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

export { cargarBDD, getProducts, getProduct, updateProduct, deleteProduct, createOrdenCompra, getOrdenCompra }