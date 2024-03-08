import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";	


export const getAuthInstance = () => {
  return getAuth();
}


export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
      const authResult = await createUserWithEmailAndPassword(auth, email, password );
      const user = authResult.user;

      const db = getFirestore();
      await addDoc(collection(db, 'users'), {
          uid: user.uid,
          email: user.email
      });

      return authResult;
  } catch (error) {
      console.error("Error creating user: ", error);
      throw error; // Propaga el error al llamador
  }
};



export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider); 
  const user = result.user;

};

export const doSignOut = () => {
    return signOut(auth);
    };

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/reservas`,
  });
};