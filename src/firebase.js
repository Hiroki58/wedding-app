// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCygiw4to9AAB0zSbh1XfnCixGh3_oudiY",
  authDomain: "wedding-app-7a2b3.firebaseapp.com",
  projectId: "wedding-app-7a2b3",
  storageBucket: "wedding-app-7a2b3.appspot.com",
  messagingSenderId: "563263581693",
  appId: "1:563263581693:web:58a7eed7b5e1b119f43d94",
  measurementId: "G-61GSNKC519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);