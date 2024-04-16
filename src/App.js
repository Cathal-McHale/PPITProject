import React, { useState, useEffect } from 'react'; // Add this line
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Components/about';
import Trending from './Components/trending';
import Contact from './Components/contact';
import SignIn from './Components/signin';
import SignUp from './Components/signUp';
import Cart from './Components/cart';
import { BiCart } from 'react-icons/bi';
import axios from 'axios';
import Checkout from './Components/checkout';
import Card from 'react-bootstrap/Card';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic (e.g., authenticate user)
    // Set isLoggedIn to true if login is successful
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Trending Products</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/trending">Trending</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              <Form inline className="d-flex">
                {isLoggedIn ? null : (
                  <>
                    <Button variant="outline-success" href="/signin">Sign In</Button>
                    <Button variant="outline-success" href="/signUp">Sign Up</Button>
                  </>
                )}
                <Button variant="link" href="/cart">
                  <BiCart size={20} /> Cart
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<SignIn onLogin={handleLogin} />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  const [randomProduct, setRandomProduct] = useState(null);

  useEffect(() => {
    // Fetch a random product from the FakeStore API
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        // Get a random item from the fetched products
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomItem = response.data[randomIndex];
        // Update state with the random product
        setRandomProduct(randomItem);
      })
      .catch(error => console.error('Error fetching random product:', error));
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>Welcome to Trending Products</h1>
        <p>Discover the most popular products right now!</p>
        <Button variant="primary" as={Link} to="/trending">Explore Trending Products</Button>
      </header>

      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {randomProduct && (
            <Card style={{
              width: '18rem', border: '1px solid #ccc',
              borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
            }} className="m-2">
              <Card.Img variant="top" src={randomProduct.image} />
              <Card.Body>
                <Card.Title>{randomProduct.title}</Card.Title>
                <Card.Text>{randomProduct.description}</Card.Text>
                <Card.Text>Price: ${randomProduct.price}</Card.Text>
                <Button variant="primary" href='/trending'>Explore more</Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </Container>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Trending Products</p>
        <p>Affiliate page</p>
      </footer>
    </>
  );
}

export default App;
