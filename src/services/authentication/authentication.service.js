import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebaseConfig";

export const auth = getAuth(app);

export const logInRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
