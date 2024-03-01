// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARdKpskNl4Z7C0UDXRgrtlzfos8r1XQIc",
  authDomain: "funfriday-27476.firebaseapp.com",
  projectId: "funfriday-27476",
  storageBucket: "funfriday-27476.appspot.com",
  messagingSenderId: "103412487378",
  appId: "1:103412487378:web:2d1f5390e1e1039c48490b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);