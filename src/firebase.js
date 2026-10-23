import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
   apiKey: "AIzaSyCWfnrc6-F4GNhryC3m__5HwS8UnMRtvyI",
  authDomain: "test-36dbb.firebaseapp.com",
  projectId: "test-36dbb",
  storageBucket: "test-36dbb.firebasestorage.app",
  messagingSenderId: "770728526443",
  appId: "1:770728526443:web:25a7a2467859b452ab672e",
  measurementId: "G-1H20EJZHHD"
}; 
 export const app=initializeApp(firebaseConfig);

const auth=getAuth(app);
export const db = getFirestore(app);
export default auth;