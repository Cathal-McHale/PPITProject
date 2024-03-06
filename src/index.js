import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { DataSnapshot, getDatabase, onValue, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

function writeUserData(userId, name, email, imageUrl){
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl
  });
}

writeUserData("andreawu","awu","myemail@email.com", "myimageurl");

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

reportWebVitals();
