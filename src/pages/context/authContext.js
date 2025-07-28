import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../../firebase/firebase'; // Assurez-vous d'importer correctement Firebase
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth , initializeUser );
        return unsubscribe;
        }, []);

        async function initializeUser(user) {
            if (user) {
                setCurrentUser(user);
                setUserLoggedIn(true);
                // try {
                //     const userDoc = await db.collection("users").doc(user.uid).get();
                //     if (userDoc.exists) {
                //         const userData = userDoc.data();
                //         console.log("User data:", userData);
                //     } else {
                //         console.log("No such document!");
                //     }
                // } catch (error) {
                //     console.error("Error fetching user data:", error);
                // }
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
            setLoading(false);
        }

        const value = {
            currentUser,
            userLoggedIn,
            loading,
        }

        return (
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        );

    }
