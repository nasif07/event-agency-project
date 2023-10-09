import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    const [loading, setLoading] = useState(true);

    


    const googleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const handleUpdateProfile = (name, profileURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: profileURL
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleAccountSingUp = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    


    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[])


    const AuthInfo = {
        googleSignUp,
        googleLogIn,
        user,
        googleAccountSingUp,
        logOut,
        loading,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;