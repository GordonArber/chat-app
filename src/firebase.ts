import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDO2TV4P1zPPE283JwV4tMOtN3CpFsabCo",
  authDomain: "chat-app-a8200.firebaseapp.com",
  projectId: "chat-app-a8200",
  storageBucket: "chat-app-a8200.appspot.com",
  messagingSenderId: "938170654364",
  appId: "1:938170654364:web:014d47bde2ff94138a5759",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
