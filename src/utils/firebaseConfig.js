import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
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

export const app = initializeApp(firebaseConfig);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
