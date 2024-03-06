import React, { useState } from 'react';
//import { GoogleLogin } from 'react-google-login';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignIn.css'; // Make sure to create a SignIn.css file for custom styling

const clientId = 'EgekI6WNRhhWwnezEE5bKSNYLH1x4hke';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // Handle Google OAuth successful authentication here
  };

  const onFailure = (res) => {
    console.log('Login Failed: res:', res);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle site authentication here
    console.log('User Email:', email);
    console.log('User Password:', password);
    // You would typically send a request to your server here to validate the user
  };
  

  return (
    <Container className="signin-container">
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col md={6} className="signin-box">
          <h2>Welcome Back</h2>
          <p>Sign in with your account.</p>

          <Form onSubmit={handleSignIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>

          <hr />

        
        </Col>
      </Row>
    </Container>
  
  );
  
}

export default SignIn;
