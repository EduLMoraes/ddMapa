// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  
    apiKey: "AIzaSyBH3OJJiaI3xKl-V1bZA_KERtd8b2s6oZw",
    authDomain: "projet-92922.firebaseapp.com",
    projectId: "projet-92922",
    storageBucket: "projet-92922.appspot.com",
    messagingSenderId: "1072876916380",
    appId: "1:1072876916380:web:5131261f54a9f174d02759"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };