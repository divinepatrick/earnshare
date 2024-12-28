// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "earnshare-a0412.firebaseapp.com",
    projectId: "earnshare-a0412",
    storageBucket: "earnshare-a0412.firebasestorage.app",
    messagingSenderId: "665755136548",
    appId: "1:665755136548:web:c75fa801b1d8a6b4f11eb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);