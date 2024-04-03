import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import './SignIn.css';
import Footer from "./footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    const auth = getAuth(); // Call getAuth to get the auth instance
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
  
        // Prepare the user data
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
      </form>
    </div>
  );
};

export default SignUp;
