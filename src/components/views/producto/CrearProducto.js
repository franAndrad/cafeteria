import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CrearProducto = () => {
    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Pagina para crear productos</h1>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formNombreProdcuto">
                    <Form.Label>Nombre producto*</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del producto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el precio" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el precio" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select>
                        <option value="">una</option>
                        <option value="">dos</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </section>
    );
};

export default CrearProducto;