import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {

    const auth = getAuth(app);
    const { setUser, signIn } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const location = useLocation();
    console.log('login page location', location)

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            // console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            // console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }
    

    return (
        <div>
            <h1 className='text-center pt-5'>Login Now</h1>
            <Container className='w-50 mx-auto py-5'>
                <Form onSubmit={handleLogin}>
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
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                </Form>
                <Button onClick={handleGoogleLogin} className='me-4 mt-4'><FaGoogle/> Sign In With Google</Button>
                <Button onClick={handleGithubLogin} className='mt-4'><FaGithub/> Sign In With Github</Button>
            </Container>
        </div>
    );
};

export default Login;