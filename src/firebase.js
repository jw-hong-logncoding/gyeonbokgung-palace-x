import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAxgQMldu1d9M1712Szgj8VwIcIFmRl3Og",
    authDomain: "gyeongbokgung-palace-x.firebaseapp.com",
    projectId: "gyeongbokgung-palace-x",
    storageBucket: "gyeongbokgung-palace-x.appspot.com",
    messagingSenderId: "271565203121",
    appId: "1:271565203121:web:0337036507f1b8d8c4e490",
    measurementId: "G-G3MJYK9FVQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };