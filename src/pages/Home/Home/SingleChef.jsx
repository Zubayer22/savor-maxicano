import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleChef = ({ chef }) => {
    const { id, name, picture, experience, recipes, likes } = chef;
    return (
        <Col key={id}>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default SingleChef;