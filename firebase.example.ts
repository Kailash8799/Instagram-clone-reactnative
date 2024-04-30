// create firebase.ts file in your root folder paste your firebase config code as below

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };




// "development": {
//   "developmentClient": true,
//   "distribution": "internal"
// },
// "preview": {
//   "distribution": "internal",
//   "channel": "preview"
// },