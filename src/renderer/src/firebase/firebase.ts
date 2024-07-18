import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkWFvPW0WpGIs1wQIIQFMNLrvpg4V_7so",
  authDomain: "sentiment-6eec8.firebaseapp.com",
  projectId: "sentiment-6eec8",
  storageBucket: "sentiment-6eec8.appspot.com",
  messagingSenderId: "450039926609",
  appId: "1:450039926609:web:a791e870f34ffbf12d8d70",
  measurementId: "G-XWMLH4SDCF"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

export { app, auth, firestore };