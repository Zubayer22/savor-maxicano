import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1 className='text-center pt-5'>Register Here</h1>
            <Container className='w-50 mx-auto py-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phot URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Your Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <Form.Group>
                        <Form.Text className='text-secondary'>
                            Already have an account? <Link to='/login'>Login</Link>
                        </Form.Text>
                    </Form.Group>
                    <Form.Text className='text-success'>

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;