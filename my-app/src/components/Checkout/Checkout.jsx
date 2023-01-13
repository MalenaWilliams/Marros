import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from '../../assets/firebase';
import { useCartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';


const Checkout = () => {
    const initialValues = { nombreCompleto: "", email: "", validateEmail: "", dni: "", celular: "", direccion: "" }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { totalPrice, cart, emptyCart } = useCartContext()
    const formulario = React.useRef()
    let navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        e.target.reset()
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        //Errores de nombre y apellido (que no los ingrese)
        if (!values.nombreCompleto) {
            errors.nombreCompleto = "Este campo es requerido";
        }
        //Errores del email (que no lo ingrese, que no sea valido)
        if (!values.email) {
            errors.email = "Este campo es requerido";
        } else if (!regex.test(values.email)) {
            errors.email = "No es un formato valido de email";
        }
        //Errores del email a validar (que no lo ingrese, que no sea valido, que no sea el mismo, que no sea valido podria borrarse ya que si es valido el primero solo con que sea igual ya es valido)
        if (!values.validateEmail) {
            errors.validateEmail = "Debe ingresar nuevamente el email";
        } else if (!regex.test(values.validateEmail)) {
            errors.validateEmail = "No es un formato valido de email";
        } else if (values.validateEmail !== values.email) {
            errors.validateEmail = "Los emails no coinciden";
        }
        //Errores del DNI (que no lo ingrese, ya que sea un numero me aseguro dandole el tipo "number" al input)
        if (!values.DNI) {
            errors.DNI = "Este campo es requerido";
        }

        if (!values.celular) {
            errors.celular = "Este campo es requerido";
        }
        if (!values.direccion) {
            errors.direccion = "Este campo es requerido";
        }
        return errors;
    };


    const consultarFormulario = async (e) => {
        const datosForm = new FormData(formulario.current)
        const cliente = Object.fromEntries(datosForm)

        let allProductsHaveStock = true;

        let cartIndex = 0;

        const databaseProductsById = {};
        const productsIds = [];

        while (cartIndex < cart.length && allProductsHaveStock) {
            const productCart = cart[cartIndex];

            try {
                const prodBDD = await getProduct(productCart.id);
                if (prodBDD.stock < productCart.cant) {
                    allProductsHaveStock = false;
                    toast.error(`Lo sentimos, su orden de compra no se pudo generar correctamente debido a que el producto ${prodBDD.nombre} no posee stock suficiente, modifique la cantidad y vuelva a intentar`)
                }

                productsIds.push(productCart.id)
                databaseProductsById[productCart.id] = prodBDD;
            } catch (e) {
                console.error(e)
            }

            cartIndex++;
        }

        if (allProductsHaveStock) {
            for (let i = 0; i < cart.length; i++) {
                const productCart = cart[i];
                const prodBDD = databaseProductsById[productCart.id];

                prodBDD.stock -= productCart.cant;

                try {
                    await updateProduct(productCart.id, prodBDD)
                } catch (err) {
                    console.error(err);
                }
            }

            try {
                const createResult = await createOrdenCompra(cliente, totalPrice(), new Date().toISOString().slice(0, 10))
                const ordenCompra = await getOrdenCompra(createResult.id);
                toast.success(`¡Gracias por su compra! Su orden de compra es: ${ordenCompra.id}`)
                emptyCart()
                navigate("/")
            } catch (err) {
                console.error(err);
            }
        } else {
            navigate("/cart")
        }

        delete cliente["validateEmail"];
    }

    return (
        <div className="container">
            <form className='form' onSubmit={handleSubmit} ref={formulario}>
                <div className="form__div">
                    <label htmlFor="nombre" className="form__label">Nombre y Apellido</label>
                    <input type="text" className="form__control" name="nombreCompleto" value={formValues.nombreCompleto} onChange={handleChange} />
                    <p className='colorMensajeCheckout'>{formErrors.nombreCompleto}</p>
                </div>
                <div className="form__div">
                    <label htmlFor="email" className="form__label">Email</label>
                    <input type="text" className="form__control" name="email" value={formValues.email} onChange={handleChange} />
                    <p className='colorMensajeCheckout'>{formErrors.email}</p>
                </div>
                <div className="form__div">
                    <label htmlFor="email2" className="form__label">Repetir Email</label>
                    <input type="text" className="form__control" name="validateEmail" value={formValues.validateEmail} onChange={handleChange} />
                    <p className='colorMensajeCheckout'>{formErrors.validateEmail}</p>
                </div>
                <div className="form__div">
                    <label htmlFor="dni" className="form__label">DNI</label>
                    <input type="number" className="form__control" name="dni" value={formValues.dni} onChange={handleChange} />
                    <p className='colorMensajeCheckout'>{formErrors.DNI}</p>
                </div>
                <div className="form__div">
                    <label htmlFor="celular" className="form__label">Celular</label>
                    <input type="number" className="form__control" name="celular" value={formValues.celular} onChange={handleChange} />
                    <p className='colorMensajeCheckout'>{formErrors.celular}</p>
                </div>
                <div className="form__div">
                    <label htmlFor="direccion" className="form__label">Dirección</label>
                    <input type="text" className="form__control" name="direccion" value={formValues.direccion} onChange={handleChange} />
                    <p className='colorMensajeCheckout'>{formErrors.direccion}</p>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
        </div>

    );

}

export default Checkout;
