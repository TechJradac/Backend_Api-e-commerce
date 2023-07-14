// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD73AL9LlwtmrHfgxJeauA77fTRlrZ5t34",
  authDomain: "bart-hannah.firebaseapp.com",
  projectId: "bart-hannah",
  storageBucket: "bart-hannah.appspot.com",
  messagingSenderId: "1022609797323",
  appId: "1:1022609797323:web:d16350eee06135df59eb4e",
  measurementId: "G-K4CGQ7PVGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);