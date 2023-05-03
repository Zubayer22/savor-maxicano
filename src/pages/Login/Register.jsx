import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { createUser, logOut } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photURL, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                logOut();
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div>
            <h1 className='text-center pt-5'>Register Here</h1>
            <Container className='w-50 mx-auto py-5'>
                <Form onSubmit={handleRegister}>
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
                    <Form.Group>
                        <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label="Accept Terms and Conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!accepted}>
                        Register
                    </Button>
                    <Form.Group>
                        <Form.Text className='text-secondary'>
                            Already have an account? <Link to='/login'>Login</Link>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
};

export default Register;