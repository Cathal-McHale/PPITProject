import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyDIPO4UxrU8ybNkV9mR9_apW6hcySiV5gE",
  authDomain: "ppitproject-550fd.firebaseapp.com",
  databaseURL: "https://ppitproject-550fd-default-rtdb.firebaseio.com",
  projectId: "ppitproject-550fd",
  storageBucket: "ppitproject-550fd.appspot.com",
  messagingSenderId: "984025950669",
  appId: "1:984025950669:web:1e04034bf1f04550cb3c84",
  measurementId: "G-FSH71MGJHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Update rendering code to use createRoot
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();






