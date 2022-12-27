import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9cWEzTwmO8BTViUiEioTCRMUzuStAH4w",
  authDomain: "auth-1258a.firebaseapp.com",
  projectId: "auth-1258a",
  storageBucket: "auth-1258a.appspot.com",
  messagingSenderId: "839698163153",
  appId: "1:839698163153:web:19532e7df3ef05b281acf0"
};


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

