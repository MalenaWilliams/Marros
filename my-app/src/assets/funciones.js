const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const products = await response.json()
    return products
}
export { consultarBDD}