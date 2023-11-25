import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDYqGhjnHPS4toEZ05ndA6T-9xlr3daqi0",
    authDomain: "fb-proyect-db61a.firebaseapp.com",
    projectId: "fb-proyect-db61a",
    storageBucket: "fb-proyect-db61a.appspot.com",
    messagingSenderId: "472356437411",
    appId: "1:472356437411:web:788b361a573f4b59242e16"
};


initializeApp(firebaseConfig);

export const db = getFirestore();