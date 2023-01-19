import firebase from 'firebase/app';
import 'firebase/database'; 


const firebaseConfig = {
    apiKey: "AIzaSyDoo_Ljr-5DsU0sZJoGq-9TRHm40s5Y6ok",
    authDomain: "nico-383a4.firebaseapp.com",
    databaseURL: "https://nico-383a4-default-rtdb.firebaseio.com",
    projectId: "nico-383a4",
    storageBucket: "nico-383a4.appspot.com",
    messagingSenderId: "893813110622",
    appId: "1:893813110622:web:a598784bb8a61de63001cf"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}