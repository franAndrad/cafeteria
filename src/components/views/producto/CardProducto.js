import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardProducto = (props) => {
    return (
        <div className='col-lg-3 col-md-4 col-6 mt-3 card-group'>
            <Card>
                <Card.Img variant="top" src={props.producto.imagen} />
                <Card.Body>
                    <Card.Title>{props.producto.nombreProducto}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                        <h4>${props.producto.precio}</h4>
                        <Button variant="primary">Ver mas</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardProducto;