import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmhUReWkeJNpORiKlBaPqX3vM9kKl0NO4",
  authDomain: "todo-app-96399.firebaseapp.com",
  projectId: "todo-app-96399",
  storageBucket: "todo-app-96399.appspot.com",
  messagingSenderId: "612842577289",
  appId: "1:612842577289:web:445dae7857e56936c55558",
  measurementId: "G-CNZ1G20VWZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}