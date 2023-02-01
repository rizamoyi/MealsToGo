import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../utils/firebaseConfig";

const auth = getAuth(app);

export const logInRequest = (email, password) => {
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
