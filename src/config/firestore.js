// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApp } from "firebase/app";
import { getApps } from "firebase/app";
// import { firestore } from "firebase/firestore";
// import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzqqZ3vKivR_FbmYOCIQ_aLGvYwwYb4es",
  authDomain: "jtweet-2211a.firebaseapp.com",
  projectId: "jtweet-2211a",
  storageBucket: "jtweet-2211a.appspot.com",
  messagingSenderId: "315935277998",
  appId: "1:315935277998:web:3a883e81b9bda7527d7e3f",
  measurementId: "G-ZYZ4VTX3L2",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore(app);
// db.settings({ timeStampsInSnapshots: true });
