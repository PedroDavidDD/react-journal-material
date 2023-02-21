// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTq-l9q3mU7prnvSewmPlHd7lIf7zyrvA",
  authDomain: "react-cursos-740d3.firebaseapp.com",
  projectId: "react-cursos-740d3",
  storageBucket: "react-cursos-740d3.appspot.com",
  messagingSenderId: "1016149071634",
  appId: "1:1016149071634:web:a52fba7b52eef3736d45cb"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );