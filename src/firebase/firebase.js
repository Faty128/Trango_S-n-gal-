// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjtvWuZyWJZF3wPMaGaWv1qSsyqon9B6E",
  authDomain: "trango-senegal-e6945.firebaseapp.com",
  projectId: "trango-senegal-e6945",
  storageBucket: "trango-senegal-e6945.firebasestorage.app",
  messagingSenderId: "1039409181469",
  appId: "1:1039409181469:web:c9ddf47a543274264267f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
// Export the initialized Firebase app and Firestore database
export { app, database };
export const auth = getAuth(app)