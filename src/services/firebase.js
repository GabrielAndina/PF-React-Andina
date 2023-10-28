// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxt10A6rUmD9QGSf0C1ShSqUt3b_EM4gA",
  authDomain: "pf-final-andina.firebaseapp.com",
  projectId: "pf-final-andina",
  storageBucket: "pf-final-andina.appspot.com",
  messagingSenderId: "59289219455",
  appId: "1:59289219455:web:a197522d2bc4a40936ea4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)