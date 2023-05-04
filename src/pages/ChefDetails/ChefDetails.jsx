import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { FaHandPointRight, FaRegThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ChefRecipe from './ChefRecipe';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const { chefId } = useParams();
    const [chef, setChef] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://savor-maxican-server-zubayer22.vercel.app/chef/${chefId}`)
            .then(res => res.json())
            .then(data => {
                setChef(data);
                setLoading(false);
            });
    }, [chefId]);

    const { name, description, picture, likes,experience,recipes } = chef;

    return (
        <Container className='my-5'>
            {loading ? (
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            ) : (
                <Row className='d-flex align-items-center'>
                    <Col xs={12} md={6}>
                        <LazyLoad><img className='w-100' src={picture} alt='' /></LazyLoad>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='d-flex justify-content-between'>
                            <h2>{name}</h2>
                            <p><FaRegThumbsUp /> {likes}</p>
                        </div>
                        <p>{description}</p>
                        <div>
                            <p><FaHandPointRight></FaHandPointRight> {experience} years of experience</p>
                            <p><FaHandPointRight></FaHandPointRight> Numbers of recipes : {recipes}</p>
                        </div>
                    </Col>
                </Row>
            )}
            <h3 className='my-5 text-center'>Some special recipe of {name}</h3>
            <ChefRecipe></ChefRecipe>
        </Container>
    );
};

export default ChefDetails;
