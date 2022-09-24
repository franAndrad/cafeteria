import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/views/Home'
import AdministrarProductos from './components/views/producto/AdministrarProductos'
import CrearProducto from './components/views/producto/CrearProducto'
import EditarProducto from './components/views/producto/EditarProducto'
import Error404 from './components/views/Error404';
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Login from './components/views/Login';
import Registro from './components/views/Registro';
import VerMas from './components/views/VerMas';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import { useState } from 'react';
import RutaProtegida from './components/common/routes/RutaProtegida';

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState({});
  return (
    <div className="App body">
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>} ></Route>
          <Route exact path='/registro' element={<Registro></Registro>} ></Route>
          <Route path='/*' element={
            <RutaProtegida>
              <Routes>
                <Route exact path='/administrar' element={<AdministrarProductos></AdministrarProductos>}></Route>
                <Route exact path='/administrar/crear' element={<CrearProducto></CrearProducto>}></Route>
                <Route exact path='/administrar/editar/:id' element={<EditarProducto></EditarProducto>}></Route>
              </Routes>
            </RutaProtegida>
          }>
          </Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>
          <Route exact path='/verMas/:id' element={<VerMas></VerMas>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
