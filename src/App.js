import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'; // Add this line
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './Components/about';
import Trending from './Components/trending';
import Contact from './Components/contact'; // Ensure you have a Contact component
import './Components/about.css'; 
import './Components/trending.css'; 
import SignIn from './Components/signin';
//import Footer from './Components/footer';

function App() {
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
                <Button variant="outline-success" href="/signin">Sign In</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Home component (assuming Trending component is similar)
function Home() {
  return (
    <>
      <header className="App-header">
        <h1>Welcome to Trending Products</h1>
        <p>Discover the most popular products right now!</p>
        <Button variant="primary" href="#trending">Explore Trending Products</Button>
      </header>

      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="d-flex flex-wrap justify-content-around">
          {/* Example product card */}
          <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          {/* Repeat for other products */}
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
