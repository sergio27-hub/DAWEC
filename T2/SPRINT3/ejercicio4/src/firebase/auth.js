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
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc ,doc } from "firebase/firestore";	


export const getAuthInstance = () => {
  return getAuth();
}

export const doUpdateProfile = async (profile) => {
  const user = auth.currentUser;
  try {
    // Solo actualizar displayName y photoURL
    await updateProfile(user, profile);
  } catch (error) {
    console.error("Error updating profile: ", error);
  }
  return user;
}

export const doCreateUserWithEmailAndPassword = async (email, password, firstName, lastName, phoneNumber, photoURL) => {
  try {
      const authResult = await createUserWithEmailAndPassword(auth, email, password , firstName, lastName, phoneNumber, photoURL);
      const user = authResult.user;

      // Actualizar el perfil del usuario con el nombre, apellido y foto de perfil proporcionados
      await updateProfile(user, {
          displayName: `${firstName} ${lastName}`, // Combina el nombre y apellido en un solo valor para displayName
          photoURL: photoURL, // Asigna la URL de la foto de perfil
          phoneNumber: phoneNumber,
      });

      const db = getFirestore();
      await addDoc(collection(db, 'users'), {
          uid: user.uid,
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          photoURL: photoURL, // Guarda la URL de la foto de perfil en Firestore
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
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
