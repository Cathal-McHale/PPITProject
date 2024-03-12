import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { initializeApp } from "firebase/app";
//import { getDatabase, onValue, ref } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyDIPO4UxrU8ybNkV9mR9_apW6hcySiV5gE",
//   authDomain: "ppitproject-550fd.firebaseapp.com",
//   databaseURL: "https://ppitproject-550fd-default-rtdb.firebaseio.com",
//   projectId: "ppitproject-550fd",
//   storageBucket: "ppitproject-550fd.appspot.com",
//   messagingSenderId: "984025950669",
//   appId: "1:984025950669:web:1e04034bf1f04550cb3c84",
//   //measurementId: "G-FSH71MGJHZ"
// //};



const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();







