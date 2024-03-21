// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpsjzkbI7V5YXObnLct3C3c0D5aeNGors",
  authDomain: "ppit-a99df.firebaseapp.com",
  projectId: "ppit-a99df",
  storageBucket: "ppit-a99df.appspot.com",
  messagingSenderId: "867117843549",
  appId: "1:867117843549:web:ef285abd3023b8956f39b4",
  measurementId: "G-BKRZDP3NNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);