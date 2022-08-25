import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import ItemProducto from './ItemProducto';
import { Link } from 'react-router-dom';

const AdministrarProductos = () => {

    const URL = process.env.REACT_APP_API_CAFETERIA;
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        // peticion get
        try {
            // codigo que quiero ejecutar
            const respuesta = await fetch(URL);
            const listaProductos = await respuesta.json();
            setProductos(listaProductos);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='container'>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h1 className='display-4'>Productos disponibles</h1>
                <Link to='/administrar/crear' className='btn btn-primary'>Agregar</Link>
            </div>
            <hr />
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>URL Imagen</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Aqui tengo que hacer un map */}
                    {productos.map((producto) =>
                        <ItemProducto key={producto.id} producto={producto} consultarAPI={consultarAPI}></ItemProducto>
                    )
                    }
                </tbody>
            </Table>
        </section>
    );
};

export default AdministrarProductos;