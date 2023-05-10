import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBojMPxxOeO071PbTG0Av0niveLA6D18U0",
  authDomain: "chatgpt-aichat.firebaseapp.com",
  projectId: "chatgpt-aichat",
  storageBucket: "chatgpt-aichat.appspot.com",
  messagingSenderId: "440375865868",
  appId: "1:440375865868:web:9a41135704bc2c296b3429"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };