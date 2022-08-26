import React, { useState, useEffect } from 'react';
import CardProducto from './producto/CardProducto';

const Home = () => {

    const [productos, setProductos] = useState([]);
    const URL = process.env.REACT_APP_API_CAFETERIA;

    useEffect(() => {
        consultarAPI();
    }, [])

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            const listaProductos = await respuesta.json();
            setProductos(listaProductos);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='container mt-3'>
            <h1>Pagina Principal</h1>
            <hr />
            <div className='row my-4'>
            {
                productos.map((producto, key) =>
                <CardProducto key={key} producto={producto}></CardProducto>
                )
            }
            </div>
        </section>
    );
};

export default Home; <h1>Pagina Principal</h1>