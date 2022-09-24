import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { cantidadCaracteres, validarPrecio, validarURL, validarCategoria } from "./helpers";
import Swal from "sweetalert2";

const EditarProducto = () => {
    // traer el parametro
    const { id } = useParams();
    // console.log(id);

    const [producto, setProducto] = useState({});
    const URL = process.env.REACT_APP_API_CAFETERIA;
    // referencias 
    const nombreProductoRef = useRef('');
    const precioRef = useRef(0);
    const imagenRef = useRef('');
    const navegacion = useNavigate();

    useEffect(() => {
        consultarAPI();
    }, [])

    const consultarAPI = async () => {
        try {
            const respuesta = await fetch(URL + '/' + id);
            const dato = await respuesta.json();
            setProducto(dato);
        } catch (error) {
            console.log(error);
            // mostrar un mensaje intiutivo
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validar que todos los campos son correctos
        if (cantidadCaracteres(nombreProductoRef.current.value) && validarPrecio(precioRef.current.value) && validarURL(imagenRef.current.value) && validarCategoria(producto.categoria)) {
            const productoEditar = {
                nombreProducto: nombreProductoRef.current.value,
                precio: precioRef.current.value,
                imagen: imagenRef.current.value,
                categoria: producto.categoria
            }
            console.log(productoEditar);
            try {
                const resp = await fetch(URL + '/' + id, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        "x-token": JSON.parse(localStorage.getItem('tokenCafe')).token
                    },
                    body: JSON.stringify(productoEditar)
                });
                if (resp.status === 200) {
                    // mostrar mensaje que todo salio bien
                    Swal.fire(
                        'Producto editado!',
                        'El producto fue editado correctamente',
                        'success'
                    )
                    // redirecciona a la pagina de administrar
                    navegacion('/administrar');
                }
            } catch (error) {
                console.log(error);
                // mostrar mensaje al usuario
            }
        } else {
            // mostrar mensaje de error
        }
        // crear un objeto con los datos modificados
        console.log(nombreProductoRef);
        console.log(nombreProductoRef.current);
        console.log(nombreProductoRef.current.value);
        // pedir a la api la actualizacion

        // redireccionar a la web de la tabla de productos
    }

    return (
        <section className="container">
            <h1 className="display-4 mt-5">Editar Producto</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreProdcuto">
                    <Form.Label>Nombre producto*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Cafe"
                        defaultValue={producto.nombreProducto}
                        ref={nombreProductoRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: 50"
                        defaultValue={producto.precio}
                        ref={precioRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/foto/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
                        defaultValue={producto.imagen}
                        ref={imagenRef}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select value={producto.categoria} onChange={(e) => setProducto({ ...producto, categoria: e.target.value })}> //lo destructuramos para que no se modifique el objeto sino solamente la categoria
                        <option value="">Seleccione una opcion</option>
                        <option value="bebida-caliente">Bebida Caliente</option>
                        <option value="bebida-fria">Bebida Fria</option>
                        <option value="dulce">Dulce</option>
                        <option value="salado">Salado</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
            {/* {msjError ? (
                <Alert variant="danger" className="mt-3">
                    This is a alert—check it out!
                </Alert>
            ) : null} */}
        </section>
    );
};

export default EditarProducto;
