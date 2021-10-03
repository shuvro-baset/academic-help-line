import React from 'react';
import { Navbar, Container, Nav,  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>AHL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className="menu" to="/home">Home</NavLink>
                    <NavLink className="menu" to="/services">Services</NavLink>
                    <NavLink className="menu" to="/about">Gallery</NavLink>
                    <NavLink className="menu" to="/about">About</NavLink>
                    <NavLink className="menu" to="/link">Contact</NavLink>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;