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

export { cargarBDD }