// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";  

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrKGm-0No9lQJya0D6BAPuO_nbtuUGJSc",
    authDomain: "galaxyplay-15910.firebaseapp.com",
    databaseURL: "https://galaxyplay-15910-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "galaxyplay-15910",
    storageBucket: "galaxyplay-15910.appspot.com",
    messagingSenderId: "291186985034",
    appId: "1:291186985034:web:c8ef9f6f9d2b43bd80beb3",
    measurementId: "G-5S2K1R7V9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and export the database
const database = getDatabase(app);

// Initialize and export Firebase Authentication
const auth = getAuth(app);

export { database, ref, onValue, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
