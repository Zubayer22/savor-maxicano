import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );


    return (
        <Navbar expand="lg" bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand><Link className='text-decoration-none text-white' to='/'>Savor Maxican</Link></Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-4 d-flex align-items-center gap-4"
                        navbarScroll
                    >
                        <NavLink className='text-decoration-none nav-col-cus' activeClassName="active" to='/'>Home</NavLink>
                        <NavLink className='text-decoration-none nav-col-cus' activeClassName="active" to='/about-us'>About Us</NavLink>
                        <NavLink className='text-decoration-none nav-col-cus' activeClassName="active" to='/blog'>Blog</NavLink>
                    </Nav>
                    {
                        user ?
                            <div>
                                <Button onClick={handleLogOut} variant="primary">Log Out</Button>

                                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                                    <img style={{ width: '35px' }} className='rounded-circle ms-3' src={user?.photoURL} alt="" />
                                </OverlayTrigger>
                            </div>
                            :
                            <Link to="/login">
                                <Button variant="primary">Log In</Button>
                            </Link>
                    }
                    {/* <Link to='/login'><Button>Login</Button></Link> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;