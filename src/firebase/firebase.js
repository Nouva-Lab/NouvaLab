import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYgCPSxhZ-RJZEVJvC_Q9l3rQlBOVk1z8",
  authDomain: "edutube-61c9b.firebaseapp.com",
  projectId: "edutube-61c9b",
  storageBucket: "edutube-61c9b.firebasestorage.app",
  messagingSenderId: "616756818683",
  appId: "1:616756818683:web:3c004b745d1cbd3004765e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app); // Firebase Authentication setup

export { db, storage, auth };
