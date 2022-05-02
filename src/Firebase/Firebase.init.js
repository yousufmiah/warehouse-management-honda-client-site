// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyDE5txiKGuPoJvILRF1ze644rNZMbpI3t0",
  // authDomain: "honda-app-91b97.firebaseapp.com",
  // projectId: "honda-app-91b97",
  // storageBucket: "honda-app-91b97.appspot.com",
  // messagingSenderId: "722034877760",
  // appId: "1:722034877760:web:957ef2b40b022b17c346a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
