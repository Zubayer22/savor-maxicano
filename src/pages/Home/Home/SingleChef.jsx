import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { useNavigate } from 'react-router-dom';

const SingleChef = ({ chef }) => {
    const { id, name, picture, experience, recipes, likes } = chef;
    const navigate =  useNavigate();
    return (
        <Col key={id}>
            <Card>
                <LazyLoad><Card.Img variant="top" src={picture} /></LazyLoad>
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text><FaRegThumbsUp></FaRegThumbsUp> {likes}</Card.Text>
                    </div>

                    
                        {
                            <div>
                                <p>{experience} years of experience</p>
                                <p>Numbers of recipes : {recipes}</p>
                            </div>
                        }
                    
                    <Button onClick={() => navigate(`/chef/${id}`)}>View Recipes</Button>
                </Card.Body>

            </Card>
        </Col>

    );
};

export default SingleChef;