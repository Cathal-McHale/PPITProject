// ProductCard.jsx
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product }) => {
    console.log('Product:', product); // Debugging statement
    if (!product) {
        return <p>No product data available</p>;
    }

    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    Price: ${product.price}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
