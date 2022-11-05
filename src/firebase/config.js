import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// import { updateDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA14ODPl7YwCZf8_s8bFImtYKWazmfUkhM",
    authDomain: "fireblogsyt-96c29.firebaseapp.com",
    databaseURL: "https://fireblogsyt-96c29-default-rtdb.firebaseio.com",
    projectId: "fireblogsyt-96c29",
    storageBucket: "fireblogsyt-96c29.appspot.com",
    messagingSenderId: "694313777079",
    appId: "1:694313777079:web:618f40bf0e19a2464d5a32"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export { db, auth, storage }
