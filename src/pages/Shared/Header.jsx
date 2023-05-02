import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href="#">Savor Maxican</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-4 d-flex align-items-center gap-4"
                        navbarScroll
                    >
                        <Link className='text-decoration-none text-white' to='/'>Home</Link>
                        <Link className='text-decoration-none text-white' to='/about-us'>About Us</Link>
                    </Nav>
                    <Button>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;