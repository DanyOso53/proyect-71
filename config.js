import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA6VDbzI8PI4tmjINWar3sparKLdEAguR4",
    authDomain: "bicicle-proyect.firebaseapp.com",
    projectId: "bicicle-proyect",
    storageBucket: "bicicle-proyect.appspot.com",
    messagingSenderId: "869146567488",
    appId: "1:869146567488:web:1b0d574f7825835249d0a5"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
