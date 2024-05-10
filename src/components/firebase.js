// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpAmFh6POqb8b3A3j3Yy99ZD9uuWKgkeA",
  authDomain: "aaa-web-9346f.firebaseapp.com",
  projectId: "aaa-web-9346f",
  storageBucket: "aaa-web-9346f.appspot.com",
  messagingSenderId: "679392182173",
  appId: "1:679392182173:web:e096b14c7fa00d9d68b974",
  measurementId: "G-FQ9KW5EFVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)