// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIrOdHkYmsb8Pt9qGXdYwDBWk9kp2QS78",
  authDomain: "arimovies-react.firebaseapp.com",
  projectId: "arimovies-react",
  storageBucket: "arimovies-react.appspot.com",
  messagingSenderId: "504725641831",
  appId: "1:504725641831:web:992ae6f7f9164be82d52c2",
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyCIrOdHkYmsb8Pt9qGXdYwDBWk9kp2QS78
// REACT_APP_FIREBASE_AUTH_DOMAIN=arimovies-react.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=arimovies-react
// REACT_APP_FIREBASE_STORAGE_BUCKET=arimovies-react.appspot.com
// REACT_APP_MESSAGING_SENDER=504725641831
// REACT_APP_APP_ID=1:504725641831:web:992ae6f7f9164be82d52c2

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
