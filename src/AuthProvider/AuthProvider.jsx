import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    
    const googleProvider = new GoogleAuthProvider();
    const createUserWithEmail = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const handleGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    const handleSignOut = ()=>{
        return signOut(auth
        )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
        })
        return ()=> {
            unsubscribe
        }
    },[])

    const authInfo = {
        user,
        loading,
        setUser,
        createUserWithEmail,
        signInWithEmail,
        handleSignOut,
        handleGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;