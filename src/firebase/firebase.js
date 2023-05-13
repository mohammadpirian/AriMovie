// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyCIrOdHkYmsb8Pt9qGXdYwDBWk9kp2QS78
// REACT_APP_FIREBASE_AUTH_DOMAIN=arimovies-react.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=arimovies-react
// REACT_APP_FIREBASE_STORAGE_BUCKET=arimovies-react.appspot.com
// REACT_APP_MESSAGING_SENDER=504725641831
// REACT_APP_APP_ID=1:504725641831:web:992ae6f7f9164be82d52c2

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
