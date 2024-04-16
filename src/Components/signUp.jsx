import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './SignIn.css';
import Footer from "./footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState(null);

  const signUp = (e) => {
    e.preventDefault();
    const auth = getAuth(); 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const userData = {
          email: email,
          name: name,
          address: address,
          contact: contact
        };
        fetch('http://localhost:4000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
          .then(response => {
            if (response.ok) {
              console.log('User data sent to server successfully');
              // Redirect to login page after successful sign up
              window.location.href = '/signin';
            } else {
              throw new Error('Failed to send user data to server');
            }
          })
          .catch(error => {
            console.error('Error sending user data to server:', error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUpWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setEmail(user.email); 
        window.location.href = '/signin'; // Redirect to login page after signing up with Google
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create your Account</h1>
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
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your contact number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button type="submit">Sign Up Now</button>
        <button type="button" onClick={signUpWithGoogle}>Sign Up with Google</button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default SignUp;
