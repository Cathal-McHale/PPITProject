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
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Fetch all products from FAKESTORE API
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setAllProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Function to add item to cart
  const addToCart = (item) => {
    // Show message when item is added to cart
    setShowMessage(true);
    setCart([...cart, item]); // Update cart state
    setCartCount(cartCount + 1); // Update cart count

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

    // Hide message after 1 second
    setTimeout(() => setShowMessage(false), 1000);
  };

  // Function to filter products based on search input
  const handleSearch = (input) => {
    if (typeof input !== 'string') {
      return;
    }

    const filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Container>
        <div className="searchbar-container">
          {/* Pass handleSearch function to SearchBar component */}
          <SearchBar onSearch={handleSearch} />
        </div>
        <h1 className="mt-5">Available Products</h1>
        <div className="cart-count mt-3">
          Cart Count: {cartCount}
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
          {filteredProducts.map((product) => (
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
        {showMessage && (
          <div className="alert alert-success mt-3" role="alert" style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000', width: '300px' }}>
            Item added to cart!
          </div>
        )}
        
      </Container>
      <Footer />
    </div>
  );
}

export default Trending;
