// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr1NgJsNB0LxIBeSDRRfaVcUOCb_MgGAs",
  authDomain: "e-comercecapararo.firebaseapp.com",
  projectId: "e-comercecapararo",
  storageBucket: "e-comercecapararo.appspot.com",
  messagingSenderId: "671884361655",
  appId: "1:671884361655:web:a7a46664de9549dd0af232",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
