import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="danger" expand="lg" variant='dark'>
        <Container>
            <Navbar.Brand as={Link} to='/' href="/">Cafeteria</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className='nav-item nav-link' end to='/'>Home</NavLink>
                    <NavLink className='nav-item nav-link' end to='/administrar'>Administrar</NavLink>
                    <NavLink className='nav-item nav-link' end to='/administrar/crear'>Crear</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Menu;