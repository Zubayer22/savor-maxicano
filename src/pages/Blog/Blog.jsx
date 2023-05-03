import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='text-center'>
            <Container className='py-5' ref={ref} style={{ minHeight: '100vh'}}>
                <h1 className='pb-5 text-center'>Blog</h1>
                <div  className='text-start'>
                    <h3>Tell us the differences between uncontrolled and controlled components.</h3>
                    <p>Uncontrolled components in React manage their own state and the state is maintained by the browser. They are easier to use but may cause unexpected behavior.<br /><br />Controlled components, on the other hand, rely on the parent component to manage and update their state. They provide more control over the component's behavior and can prevent unexpected behavior.</p>
                    <h3>How to validate React props using PropTypes</h3>
                    <p>To validate React props using PropTypes, import the PropTypes library and define the PropTypes for your component. PropTypes allow you to validate the types of props that are passed to components, ensuring that they meet the expected data type and format.</p>
                    <h3>Tell us the difference between nodejs and express js.</h3>
                    <p>Node.js is a runtime environment for executing JavaScript on the server side, while Express.js is a web application framework that runs on top of Node.js. Node.js provides a platform for building server-side applications using JavaScript, while Express.js simplifies the process of building web applications by providing a set of tools and features.<br /><br /> Express.js is built on top of Node.js and can be used in conjunction with it to build web applications. Overall, Node.js is a runtime environment, while Express.js is a web application framework that runs on top of Node.js.</p>
                    <h3>What is a custom hook, and why will you create a custom hook?</h3>
                    <p>A custom hook is a reusable function in React that contains stateful logic and can be shared across multiple components.<br />Developers create custom hooks to encapsulate complex logic, such as data fetching or handling form inputs, and to reduce code duplication across components. By creating a custom hook, developers can extract common functionality from components and reuse it in a declarative and composable way.<br /><br />In summary, custom hooks are reusable functions that contain stateful logic and can be used across multiple components in React. They are created to encapsulate complex logic and reduce code duplication, making it easier to build and maintain React applications.</p>
                </div>

            </Container>
            <Pdf targetRef={ref} filename="blog.pdf" options={{ y: -50 }}>
                {({ toPdf }) => <Button onClick={toPdf} className='mb-5'>Generate Pdf</Button>}
            </Pdf>
        </div>

    );
};

export default Blog;