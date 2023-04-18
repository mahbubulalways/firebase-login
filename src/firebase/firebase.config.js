// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhZiNpPENlrr4d1Gtp_EuKgZP1VIgjGAo",
  authDomain: "auth-firebase-tailwind-5af3f.firebaseapp.com",
  projectId: "auth-firebase-tailwind-5af3f",
  storageBucket: "auth-firebase-tailwind-5af3f.appspot.com",
  messagingSenderId: "4093660610",
  appId: "1:4093660610:web:f5b7817007c1938e1d1a5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app