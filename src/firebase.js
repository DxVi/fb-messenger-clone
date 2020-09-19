import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhc-8CWUpjA0DXRkuyM3Y3tVTwtm6xX_A",
    authDomain: "fb-messenger-205e9.firebaseapp.com",
    databaseURL: "https://fb-messenger-205e9.firebaseio.com",
    projectId: "fb-messenger-205e9",
    storageBucket: "fb-messenger-205e9.appspot.com",
    messagingSenderId: "736460629856",
    appId: "1:736460629856:web:f2c89f509786406860e005",
    measurementId: "G-3J383700QK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig )

const db = firebaseApp.firestore();
  
export default db;
  