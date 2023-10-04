import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Import the specific auth provider from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVSJZGfQEy10Fgbi4f9fJG1SD7XeR5-bI",
  authDomain: "hinamori-store.firebaseapp.com",
  projectId: "hinamori-store",
  storageBucket: "hinamori-store.appspot.com",
  messagingSenderId: "200694306295",
  appId: "1:200694306295:web:c3879c2d96ff5c202dcaf2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
