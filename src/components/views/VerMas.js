import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const VerMas = () => {
    const [producto, setProducto] = useState('');
    const URL = process.env.REACT_APP_API_CAFETERIA;
    const { id } = useParams();

    useEffect(() => {
        consultarAPI();
    }, []);

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL);
            const listaProductos = await respuesta.json();
            const encontrado = listaProductos.find(elemento => elemento.id === parseInt(id) );
            setProducto(encontrado);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='container d-flex justify-content-center my-auto'>
        <Card className='flex-md-row'>
            <Card.Img  src={producto.imagen} className="w-50"/>
            <Card.Body>
                <Card.Title>{producto.nombreProducto}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                    <p className='badge bg-warning fs-5'>${producto.precio}</p>
            </Card.Body>
        </Card>
        </div>
    );
};

export default VerMas;