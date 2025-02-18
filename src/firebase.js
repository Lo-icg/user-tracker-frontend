import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGVXU9qwFfnhfla7YoLIyuYt0rOTdf6bU",
    authDomain: "map-app-eef82.firebaseapp.com",
    projectId: "map-app-eef82",
    storageBucket: "map-app-eef82.firebasestorage.app",
    messagingSenderId: "279677364338",
    appId: "1:279677364338:web:b31fd98cd9cf26d8213aeb",
    measurementId: "G-BSZ3NSPWPL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
