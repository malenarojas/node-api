// Import the functions you need from the SDKs you need
const firebase = require('firebase/app');
require('firebase/storage');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyZXkzyogx15SRYJbxUN5PNn2VLhBFPcw",
  authDomain: "incidencias-391119.firebaseapp.com",
  projectId: "incidencias-391119",
  storageBucket: "incidencias-391119.appspot.com",
  messagingSenderId: "271312829438",
  appId: "1:271312829438:web:7a3e7a4423ea53e82f5eaf",
  measurementId: "G-6MCLRZRC48"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const storageRef = storage.ref();

