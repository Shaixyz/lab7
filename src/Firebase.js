// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5yMKeYMCHzeVxgIELz1eg23cQ20FOz_I",
    authDomain: "practical-exam-68010.firebaseapp.com",
    projectId: "practical-exam-68010",
    storageBucket: "practical-exam-68010.appspot.com",
    messagingSenderId: "734041745511",
    appId: "1:734041745511:web:0edb1497cd8e6dfe0accc2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();