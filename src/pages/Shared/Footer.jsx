import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer className="bg-dark pt-5 pb-4">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <h2 className='text-white'>Savor Maxican</h2>
                        <p className='text-white'>Are you curious about the secrets behind the mouth-watering flavors of Mexican cuisine? Look no further than Savor Mexican, your go-to destination for discovering the techniques, ingredients, and traditions that make Mexican cooking so special.</p>
                    </Col>
                    <Col xs={12} sm={6} md={2}>
                        <h5 className='text-white'>About</h5>
                        <ul className='list-unstyled'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={2}>
                        <h5 className='text-white'>Our Policy</h5>
                        <ul  className='list-unstyled'>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Disclaimer</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h5 className='text-white'>Newsletter</h5>
                        <Form className='mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>

                            <p className='text-white mt-4'>Subscribe to our newsletter to get latest update.</p>
                        </Form>
                    </Col>
                </Row>
                <p className='text-white border-top border-secondary mt-3 pt-4 text-center'><small>©2023. Savor Maxican, All rights reserved</small></p>
            </Container>
        </footer>
    );
};

export default Footer;
