import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';
import { Container, Row } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://savor-maxican-server-zubayer22.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <Container className='py-5'>
            <h1 className='text-center mb-5'>Our Chefs</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefs.map(chef => <SingleChef key={chef.id} chef={chef}></SingleChef>)
                }
            </Row>
        </Container>
    );
};

export default Chefs;