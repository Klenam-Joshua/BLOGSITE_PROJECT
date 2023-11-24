
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"
//const admin = require('firebase-admin');




const firebaseConfig = {
    apiKey: "AIzaSyAHRgqofI0TK430KUuKYwrbLSwjHbkMB-U",
    authDomain: "blogsite-19476.firebaseapp.com",
    projectId: "blogsite-19476",
    storageBucket: "blogsite-19476.appspot.com",
    messagingSenderId: "811519689776",
    appId: "1:811519689776:web:b8dc2942020f73d02059f5",
    measurementId: "G-00NFRL6NJY"
  };
  

// services
firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const Timestamp = firebase.firestore.Timestamp;
  const projectStorage = firebase.storage();;

  export {projectFirestore, projectAuth, Timestamp,projectStorage}