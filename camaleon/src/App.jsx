import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9cWEzTwmO8BTViUiEioTCRMUzuStAH4w",
  authDomain: "auth-1258a.firebaseapp.com",
  projectId: "auth-1258a",
  storageBucket: "auth-1258a.appspot.com",
  messagingSenderId: "839698163153",
  appId: "1:839698163153:web:19532e7df3ef05b281acf0"
};
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  

// Get a reference to the database
var database = firebase.database();

// Read data from the database
database.ref("/posts").on("value", function(snapshot) {
  console.log(snapshot.val());
});

// Write data to the database
database.ref("/posts").push({
  title: "Hello, World!",
  content: "This is a sample post."
});

const app = initializeApp(firebaseConfig);


export default App


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
