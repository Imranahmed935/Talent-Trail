import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5n1s17yWbxLC_M0RYT9dlS_JjkzqT_Rk",
  authDomain: "talent-trail-e14ba.firebaseapp.com",
  projectId: "talent-trail-e14ba",
  storageBucket: "talent-trail-e14ba.firebasestorage.app",
  messagingSenderId: "158028049902",
  appId: "1:158028049902:web:6583711440b80cda2ff2ff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;