import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDt30XW0ZHiy4KXyM1IOjeB2IdHkhdfTQM",
  authDomain: "meals-to-go-cb72d.firebaseapp.com",
  projectId: "meals-to-go-cb72d",
  storageBucket: "meals-to-go-cb72d.appspot.com",
  messagingSenderId: "405110037320",
  appId: "1:405110037320:web:dd8f2361d0352561afb17d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
