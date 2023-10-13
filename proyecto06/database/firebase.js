import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqrhuXnYunWCQ8GaPWT3KgLhYVU1zXr8k",
  authDomain: "lab06amm.firebaseapp.com",
  projectId: "lab06amm",
  storageBucket: "lab06amm.appspot.com",
  messagingSenderId: "260765364209",
  appId: "1:260765364209:web:ef4ae484a5d9c8ffd91e50",
  measurementId: "G-X9Y0TJK14E",
};
initializeApp(firebaseConfig);
export const database = getFirestore();
