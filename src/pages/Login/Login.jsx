import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1 className='text-center pt-5'>Login Now</h1>
            <Container className='w-50 mx-auto py-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Form.Group>
                        <Form.Text className='text-secondary'>
                            Don't have an account? <Link to='/register'>Register</Link>
                        </Form.Text>
                    </Form.Group>
                    <Form.Text className='text-success'>

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;