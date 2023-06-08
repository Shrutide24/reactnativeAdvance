import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDCsKj6GG3e4JrNM7XpTwL9mWs5LFnY3aM",
    authDomain: "auth-caf06.firebaseapp.com",
    projectId: "auth-caf06",
    storageBucket: "auth-caf06.appspot.com",
    messagingSenderId: "729088680275",
    appId: "1:729088680275:web:c9ef48cf9bd51730e4c1a6"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db =getFirestore();


export {auth,db};