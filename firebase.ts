// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBR3Hcc32iiZ5Jk-fpLl0t7vz54lt4Ni4s",
    authDomain: "flowthread-1.firebaseapp.com",
    projectId: "flowthread-1",
    storageBucket: "flowthread-1.appspot.com",
    // TODO: replace messagingSenderId and appId with the values from the
    // flowthread-1 Firebase project console (Project settings -> Your apps).
    messagingSenderId: "829211595380",
    appId: "1:829211595380:web:ca89f9723fa2cf97673721",
    measurementId: "G-6HT9EQX21Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {  app};
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');