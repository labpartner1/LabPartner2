import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const apiKey = process.env.FIREBASE_API;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "labpartner-15a80.firebaseapp.com",
  projectId: "labpartner-15a80",
  storageBucket: "labpartner-15a80.appspot.com",
  messagingSenderId: "278593001214",
  appId: "1:278593001214:web:5be8dd0122ce1f26f6b7af",
  measurementId: "G-55FZ4ZLZ9K"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);