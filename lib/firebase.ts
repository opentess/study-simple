import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4QFhucNaBbzXU_-stoBMvep4Zsu6uVW4",
  authDomain: "study-simple-21bd8.firebaseapp.com",
  projectId: "study-simple-21bd8",
  storageBucket: "study-simple-21bd8.appspot.com",
  messagingSenderId: "1006006837018",
  appId: "1:1006006837018:web:74b8254711437e9e2296a3",
  measurementId: "G-LLTEE3VM6H",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
