import React,{useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { cantidadCaracteres, validarCategoria, validarPrecio, validarURL } from './helpers';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearProducto = () => {

    // crear states
    const [nombreProducto,setNombreProducto] = useState('');
    const [precio,setPrecio] = useState(0);
    const [imagen,setImagen] = useState('');
    const [categoria,setCategoria] = useState('');
    const [msjError,setMsjError] = useState(false);
    // variable de entorno con la direccion de mi api
    const URL = process.env.REACT_APP_API_CAFETERIA;
    // inicializar useNavigate
    const navegacion = useNavigate();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        // validar los datos
        if(cantidadCaracteres(nombreProducto)&&validarPrecio(precio)&&validarURL(imagen)&&validarCategoria(categoria)){
            setMsjError(false);
            const nuevoProducto = {
                // nombreProducto: nombreProducto,
                // si el state y las propiedades son iguales puuede ser
                nombreProducto,
                precio,
                imagen,
                categoria
            }
            // enviar peticion a json-server (API) create
            try{
                const respuesta = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type":"application/json",
                        "x-token": JSON.parse(localStorage.getItem('tokenCafe')).token
                    },
                    body: JSON.stringify(nuevoProducto)
                })
                if(respuesta.status === 201){
                    // mostrar mensaje que todo salio bien
                    Swal.fire(
                        'Producto creado!',
                        'El producto fue agregado correctamente',
                        'success'
                    )
                    // redirecciona a la pagina de administrar
                    navegacion('/administrar');
                }
            }catch(error){
                // mostrar un mensaje al usuario
                console.log(error);
            }
        }else{
            setMsjError(true);
        }
        // crear un objeto
        // enviar peticion a json-server(API) create
        
    }
    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Pagina para crear productos</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombreProdcuto">
                    <Form.Label>Nombre producto*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Cafe"  onChange={(e)=>setNombreProducto(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: 50" onChange={(e)=>setPrecio(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control type="text" placeholder="Ej: https://www.pexels.com/es-es/foto/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/" onChange={(e)=> setImagen(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Categoria*</Form.Label>
                    <Form.Select onChange={(e)=>setCategoria(e.target.value)}>
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
                {
                    (msjError)?(<Alert variant='danger' className='mt-3'>El producto no pudo ser creado!</Alert>):null
                }
        </section>
    );
};

export default CrearProducto;