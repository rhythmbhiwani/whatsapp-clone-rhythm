import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu0fGlvLP7qhpWHC5rpuytR_2fRliiVPA",
  authDomain: "whatsapp-clone-rhythm.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-rhythm.firebaseio.com",
  projectId: "whatsapp-clone-rhythm",
  storageBucket: "whatsapp-clone-rhythm.appspot.com",
  messagingSenderId: "1070517561603",
  appId: "1:1070517561603:web:4a3deeb8556d2dd5952136",
  measurementId: "G-E9DT699RVT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
