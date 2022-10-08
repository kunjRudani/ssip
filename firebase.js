// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqvHMee3Uol_z_umvNTRSUfkJr8bvc9hk",
  authDomain: "khelmahakumbh-p1.firebaseapp.com",
  projectId: "khelmahakumbh-p1",
  storageBucket: "khelmahakumbh-p1.appspot.com",
  messagingSenderId: "148898746068",
  appId: "1:148898746068:web:8da5faff95df247a88b541"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 const auth =getAuth();
 const store=getFirestore()
export {auth,store};