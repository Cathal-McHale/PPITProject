import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBar } from './SearchBar';
import Footer from './footer';
import './trending.css';

function Trending() {
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch trending products
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching trending products:', error);
      });
  }, []);

  // Function to add item to cart
  const addToCart = (item) => {
    console.log("Adding to cart:", item); // Debug statement

    // Update cart state
    setCart([...cart, item]);

    // Update local storage
    const updatedCart = [...cart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Send item data to the server 
    axios.post('http://localhost:4000/add-to-cart', item)
      .then(response => {
        console.log('Item added to cart:', response.data);
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Container>
        <div className="searchbar-container">
          {/* Pass setResults function to SearchBar component */}
          <SearchBar setResults={setResults} />
          {/* Pass results to SearchResultsList component */}
        </div>
        <h1 className="mt-5">Available Products</h1>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {results.map((product) => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={product.image} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Trending;
