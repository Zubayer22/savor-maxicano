// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb8FjLjQd7QXqEOUuOoxPDi6phxPruYFs",
  authDomain: "savor-maxican.firebaseapp.com",
  projectId: "savor-maxican",
  storageBucket: "savor-maxican.appspot.com",
  messagingSenderId: "912104095855",
  appId: "1:912104095855:web:050df22abc6ea1f09bcd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;