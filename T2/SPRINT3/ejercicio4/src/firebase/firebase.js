import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQcheKP-l8wx4EPd1YMaKQ8NFMXrx1urE",
  authDomain: "ejercicio4-8c78b.firebaseapp.com",
  projectId: "ejercicio4-8c78b",
  storageBucket: "ejercicio4-8c78b.appspot.com",
  messagingSenderId: "152167126153",
  appId: "1:152167126153:web:4e61e656696214be30e258",
  measurementId: "G-Q5GR1PHM6J"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
