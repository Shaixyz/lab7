
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_xP38HhAG4oBgEOj74RicwPgFL1CyveM",
  authDomain: "kietlab-a972a.firebaseapp.com",
  projectId: "kietlab-a972a",
  storageBucket: "kietlab-a972a.appspot.com",
  messagingSenderId: "286509800511",
  appId: "1:286509800511:web:fca03a3e3d9030b0b4ec8a",
  measurementId: "G-E7HK8GS7JG"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();