import React, { useState, useEffect } from 'react';
import { BrowserRouter, useParams } from 'react-router-dom'; // Import BrowserRouter and useParams
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBar } from './SearchBar';
import Footer from './footer';

function Trending() {
  const [results, setResults] = useState([]);
  const [cart, setCart] = useState([]);
  const { id } = useParams(); // Extract the product ID from the URL

  useEffect(() => {
    // Fetch data from the fakestoreapi when the component mounts
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        // Update state with products including price
        setResults(response.data.map(product => ({
          ...product,
          price: parseFloat(product.price).toFixed(2) // Convert price to float and fix to 2 decimal places
        })));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []); // Empty dependency array to ensure it only runs once on mount

  // Function to add item to cart
  const addToCart = (item) => {
    console.log("Adding to cart:", item); // Debug statement
    setCart([...cart, item]);

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
        {/* Place the Footer component outside the Container */}
        <Footer />
      </div>

  );
}

export default Trending;
