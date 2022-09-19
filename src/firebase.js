import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// require("dotenv").config();
// const firebaseConfig = {
//   apiKey: "AIzaSyASdjbzGgWsS_tQmqx3DrOBoPApGIU1rYg",
//   authDomain: "bartalap-ee3e3.firebaseapp.com",
//   projectId: "bartalap-ee3e3",
//   storageBucket: "bartalap-ee3e3.appspot.com",
//   messagingSenderId: "1026993200371",
//   appId: "1:1026993200371:web:022077cb8a791d571a6b86",
//   measurementId: "G-BXCKL5MNJ0"
// };
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
  measurementId:process.env.REACT_APP_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
