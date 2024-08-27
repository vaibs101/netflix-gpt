// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8UqSjTDCsRSU3PyxVpU7j1c8wHZcIgT0",
  authDomain: "netflixgpt-d9380.firebaseapp.com",
  projectId: "netflixgpt-d9380",
  storageBucket: "netflixgpt-d9380.appspot.com",
  messagingSenderId: "45487196555",
  appId: "1:45487196555:web:3fcdf8b1784f295604878e",
  measurementId: "G-SPS3NGJ20V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
