// src/Trending.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Example static data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for Product 1.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for Product 2.',
    imageUrl: 'https://via.placeholder.com/150',
    link: '#'
  },
  // Add more products as needed
];

function Trending() {
  return (
    <Container>
      <h1 className="mt-5">Trending Products</h1>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary" href={product.link}>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Trending;
