import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyDw-3b81oAgg9uMOPHqrz1TFceLYU2Zn2c",
  authDomain: "context-react-firebase.firebaseapp.com",
  projectId: "context-react-firebase",
  storageBucket: "context-react-firebase.appspot.com",
  messagingSenderId: "241444058705",
  appId: "1:241444058705:web:3b410b522302b4097d2a70"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);