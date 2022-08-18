import React from 'react';

import { Button } from 'react-bootstrap';

const ItemProducto = () => {
    return (
        <tr>
            <td>1</td>
            <td>Cafe</td>
            <td>$700</td>
            <td>https://www.pexels.com/es-es/foto/persona-que-realiza-el-arte-del-cafe-302899/</td>
            <td>Bebida Caliente</td>
            <td>
                <Button variant='warning'>Editar</Button>
                <Button variant='danger'>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;