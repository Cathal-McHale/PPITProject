import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './SignIn.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios'; // Import axios for making HTTP requests

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth(); // Get Firebase auth instance
  const navigate = useNavigate(); // Get navigate for redirection

  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Set user as logged in
        onLogin(email);
        // Redirect user when successful sign-in
        navigate('/trending');
        setError(null); // Clear any previous errors
        // Send login details to the server
        axios.post('http://localhost:4000/signin', { email })
          .then(response => {
            console.log('Login details sent to server:', response.data);
          })
          .catch(error => {
            console.error('Error sending login details to server:', error);
          });
      })
      .catch((error) => {
        // Handle Errors 
        const errorMessage = error.message;
        console.error(errorMessage);
        setError(errorMessage); // Set error state
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // take user email from Google authentication result
        const email = result.user.email;
        // Set user as logged in
        onLogin(email);
        // Redirect user when successful sign-in
        navigate('/trending');
        setError(null); // Clear any previous errors
        // Send login details to the server
        axios.post('http://localhost:4000/signin', { email })
          .then(response => {
            console.log('Login details sent to server:', response.data);
          })
          .catch(error => {
            console.error('Error sending login details to server:', error);
          });
      })
      .catch((error) => {
        // Handle Errors 
        const errorMessage = error.message;
        console.error(errorMessage);
        setError(errorMessage); // Set error state
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signInWithEmail}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error-message">{error}</div>} {/* Display error message if exists */}
        <button type="submit">Log In</button>
        <button type="button" className="google-btn" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
