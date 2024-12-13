import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaQ3oor9iJkYjuxRV6H3u8asgKkDDynPo",
  authDomain: "social-media-feed-1116c.firebaseapp.com",
  projectId: "social-media-feed-1116c",
  storageBucket: "social-media-feed-1116c.firebasestorage.app",
  messagingSenderId: "630214879000",
  appId: "1:630214879000:web:5aef9b0bd7051d7255606d",
  measurementId: "G-EQFB55P8P5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
