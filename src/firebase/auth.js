import { auth } from '../firebase/firebase';

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword,  signInWithPopup} from 'firebase/auth';
// Function to register a new user
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Function to sign in an existing user
export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Function to sign in with Google
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //result.user
    return result;
};

// Function to sign out the current user
export const doSignOut = async () => {
    return auth.signOut();
};

// // Function to reset password
// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// };

// // Function to change user password
// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// };

// // Function to sendEmail user profile
// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/login`
//     });
// };