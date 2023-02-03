import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebaseConfig";

const auth = getAuth(app);

export const logInRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
