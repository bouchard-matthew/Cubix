// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require("dotenv");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPV8FXDLh_UKYvToN_ygfUfyhs4OWMFJE",
  authDomain: "cubix-f3550.firebaseapp.com",
  projectId: "cubix-f3550",
  storageBucket: "cubix-f3550.appspot.com",
  messagingSenderId: "715322391660",
  appId: "1:715322391660:web:11630982b657a5159dec49",
  measurementId: "G-N4XDP7L8T7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
