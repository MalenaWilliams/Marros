import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const formulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datosForm = new FormData(formulario.current)
        const cliente = Object.fromEntries(datosForm)
        console.log(cliente)
        e.target.reset()
        navigate("/")
    }

    return (
        <div className="container">
            <form className="form" onSubmit={consultarFormulario} ref={formulario}>
                <div className="form__div">
                    <label className="form__label">Nombre y Apellido:</label>
                    <input type="text" className="form__control" name="nombre" />
                </div>
                <div className="form__div">
                    <label className="form__label">Email:</label>
                    <input type="email" className="form__control" name="email" />
                </div>
                <div className="form__div">
                    <label className="form__label">DNI:</label>
                    <input type="number" className="form__control" name="dni" />
                </div>
                <div className="form__div">
                    <label className="form__label">Numero telefonico:</label>
                    <input type="number" className="form__control" name="celular" />
                </div>
                <div className="form__div">
                    <label className="form__label">Dirección:</label>
                    <input type="text" className="form__control" name="direccion" />
                </div>
                <button type="submit" className="form__button">Finalizar Compra</button>
            </form>
        </div>

    );
}

export default Checkout;
