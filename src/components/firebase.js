import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyAXwUc9eV0WecWk_jT8xUQ-1Z5rtuvYIFY",
  authDomain: "credmargwebpage.firebaseapp.com",
  projectId: "credmargwebpage",
  storageBucket: "credmargwebpage.appspot.com",
  messagingSenderId: "411145224877",
  appId: "1:411145224877:web:98cfb374b059cd20c33c24",
  measurementId: "G-PCP9CHY4HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

export { auth,provider };