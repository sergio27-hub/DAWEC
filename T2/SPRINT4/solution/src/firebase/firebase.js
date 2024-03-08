import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBibuGV3KtIejPVmTUVJT9yAKORVHeOjDU",
    authDomain: "reservas-6e8e6.firebaseapp.com",
    projectId: "reservas-6e8e6",
    storageBucket: "reservas-6e8e6.appspot.com",
    messagingSenderId: "515724653155",
    appId: "1:515724653155:web:4ba349541f8fa43adfbe56",
    measurementId: "G-8QT604WB4W"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




export { app, auth , db};
