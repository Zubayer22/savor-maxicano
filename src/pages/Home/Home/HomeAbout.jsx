import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <Container className='py-5'>
            <h1 className='text-center pb-5'>About Us</h1>
            <Row>
                <Col xs={12} md={6}>
                    <img className='w-100 px-5' src="https://i.ibb.co/xKZHSGC/pexels-hana-brannigan-3642718.jpg" alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <p>Welcome to our website! We are passionate about Mexican cuisine and want to share our love for it with the world. Our mission is to provide you with delicious and authentic Mexican recipes that you can easily make at home.<br/><br/>Our team consists of food enthusiasts who have spent years perfecting their skills in the kitchen. We believe that cooking should be fun, creative, and most importantly, delicious. We want to inspire you to get into the kitchen and start experimenting with new flavors and ingredients.<br/><br/>All of our recipes are carefully curated and tested to ensure that they are easy to follow and produce great results. We believe that everyone should be able to enjoy the delicious flavors of Mexican cuisine, regardless of their cooking experience.</p>
                    <Link to='/about-us'><Button className='mt-4'>Learn More</Button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeAbout;