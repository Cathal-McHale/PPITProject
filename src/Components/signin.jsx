import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import './SignIn.css';
import axios from 'axios'; 
import { FaGoogle } from 'react-icons/fa'; 

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // State to track signed-in user

  const auth = getAuth(); // Get Firebase auth instance

  // Check if user is already signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError(null); // Clear any previous errors
        // Send authentication details to backend
        sendAuthDetails(email, password);
      })
      .catch((error) => {
        // Handle Errors here
        const errorMessage = error.message;
        console.error(errorMessage);
        setError(errorMessage); // Set error state
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in with Google
        const user = result.user;
        console.log(user);
        setError(null); // Clear any previous errors
        // Send authentication details to backend
        sendAuthDetails(user.email, 'Google Auth');
      })
      .catch((error) => {
        // Handle Errors here
        const errorMessage = error.message;
        console.error(errorMessage);
        setError(errorMessage); // Set error state
      });
  };

  const sendAuthDetails = (email, method) => {
    // Make a POST request to your backend with authentication details
    axios.post('http://localhost:4000/authenticate', { email, method })
      .then(response => {
        console.log(response.data);
        // Handle successful authentication on backend if necessary
      })
      .catch(error => {
        console.error(error);
        // Handle error if request fails
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
          <FaGoogle className="google-icon" />
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
