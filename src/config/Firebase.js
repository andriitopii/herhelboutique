import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl9wf1U0EBIQxxRCPqzYVE1FlR6ZIkJb0",
  authDomain: "herhel-boutique.firebaseapp.com",
  databaseURL: "https://herhel-boutique-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "herhel-boutique",
  storageBucket: "herhel-boutique.appspot.com",
  messagingSenderId: "194871954850",
  appId: "1:194871954850:web:db42218f04ca6b292376fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const imgData = getStorage(app);
export const db = getFirestore(app)