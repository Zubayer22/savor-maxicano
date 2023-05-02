import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipe = () => {

    const [recipes, setRecipes] = useState([]);
    const [isButtonClicked, setIsButtonClicked] = useState([]);

    useEffect(() => {
        fetch('/public/chefRecipe.json')
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
                setIsButtonClicked(new Array(data.recipes.length).fill(false));
            });
    }, []);

    const notify = () => toast("Added to favorites!!");

    const handleButtonClick = (index) => {
        const newIsButtonClicked = [...isButtonClicked];
        newIsButtonClicked[index] = true;
        setIsButtonClicked(newIsButtonClicked);
        notify();
    }

    return (
        <Row className="g-4 my-5">
            {recipes.map((recipe, index) => (
                <Col xs={12} md={4} key={index}>
                    <Card>
                        <Card.Img variant="top" src={recipe.image} />
                        <Card.Body>
                            <Card.Title>Chef Maria's Enchiladas Verdes</Card.Title>
                            <p>Rating: <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> 4.8/5</p>
                            <h5>Ingredients</h5>
                            <Card.Text>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </Card.Text>
                            <h5>Method</h5>
                            <p>{recipe.method}</p>
                            <Button variant="primary" onClick={() => handleButtonClick(index)} disabled={isButtonClicked[index]}>
                                {isButtonClicked[index] ? 'Added to Favorite' : 'Add to Favorite'}
                            </Button>
                            <ToastContainer />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ChefRecipe;
